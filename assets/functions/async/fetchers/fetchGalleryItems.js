/**
 *
 *  This is the fetchGalleryItems async function
 *
 */

const fetchGalleryItems = async (fetch_path, setter, router) => {
  try {
    const response = await fetch(fetch_path);
    if (response.ok) {
      const data = await response.json();
      setter(data);

      // router.reload()
    } else {
      console.error("Failed to fetch gallery items");
    }
  } catch (error) {
    console.error("Error fetching gallery items:", error);
  }
};

export { fetchGalleryItems };
