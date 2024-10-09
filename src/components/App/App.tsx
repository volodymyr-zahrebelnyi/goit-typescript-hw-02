import { useState, useEffect } from "react";
import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "../services/images-api";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import BtnToTop from "../BtnToTop/BtnToTop";
import EndOfCollection from "../EndOfCollection/EndOfCollection";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import css from "./App.module.css";

import { Image } from "./App.types";
import { string } from "yup";

Modal.setAppElement("#root");

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [topic, setTopic] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(999);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImg, setSelectedImg] = useState<Image | null>(null);
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);

  const handleSearch = (newTopic: string) => {
    setTopic(newTopic);
    setPage(1);
    setImages([]);
    setShowScrollToTop(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getImages() {
      try {
        setLoading(true);
        setError(false);
        const newImages = await fetchImages(page, topic);
        setImages(prevState => [...prevState, ...newImages.images]);
        setTotalPages(newImages.totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [page, topic]);

  useEffect(() => {
    toast.dismiss();
    if (page >= totalPages && !loading) {
      toast.success("End of collection!", {
        position: "top-right",
      });
    }
  }, [page, totalPages, loading]);

  useEffect(() => {
    if (error) {
      toast.error("ERROR!", { position: "top-right" });
    }
  }, [error]);

  const openModal = (image: Image) => {
    setSelectedImg(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImg(null);
    setModalIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShowScrollToTop(false);
  };

  useEffect(() => {
    if (page >= 2 && !modalIsOpen) {
      setShowScrollToTop(true);
    }
  }, [page, modalIsOpen]);

  return (
    <div className={css.container}>
      <SearchBar onSearch={handleSearch} />
      <Toaster position="top-right" />
      {images.length > 0 && <ImageGallery items={images} onOpen={openModal} />}
      {page >= totalPages && !loading && <EndOfCollection />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {images.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        image={selectedImg}
      />
      {showScrollToTop && !modalIsOpen && <BtnToTop onClick={scrollToTop} />}
    </div>
  );
}
