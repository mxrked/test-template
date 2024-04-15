/**
 *
 *  This is the getDatabaseData hook
 *
 */

import { useState, useEffect } from "react";

import { fetchGalleryItems } from "../functions/async/fetchers/fetchGalleryItems";
import { fetchReviews } from "../functions/async/fetchers/fetchReviews";

const getDatabaseData = () => {
  const [reviews, setReviews] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGalleryItems(process.env.GALLERY_FETCH_PATH, setGalleryItems);
    fetchReviews(process.env.REVIEWS_FETCH_PATH, setReviews);
  }, []);

  return { reviews, galleryItems };
};

export default getDatabaseData;
