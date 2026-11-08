/**
 * Media assets supplied by the school.
 *
 * No genuine school photography or video has been supplied yet, so the
 * website uses designed illustrations. To add real assets:
 *
 * 1. Hero video — place an approved, properly licensed file in
 *    `public/media/hero/` and set `heroVideo`, for example:
 *      { src: "/media/hero/classroom.mp4", type: "video/mp4", poster: "/media/hero/classroom.jpg" }
 *
 * 2. Gallery photos — place images in `public/media/gallery/` and add entries
 *    to `galleryPhotos`. When this list is not empty, the Student Life gallery
 *    shows these photos instead of the illustrations.
 */

export type HeroVideo = { src: string; type: string; poster?: string };

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: { en: string; de: string };
  caption: { en: string; de: string };
};

export const heroVideo: HeroVideo | null = null;

export const galleryPhotos: GalleryPhoto[] = [];
