export type Slide = {
    id: number;
    title: string;
    subTitle: string;
    img: string;
    uri: string;
  };
  
  export type CarouselProps = {
    autoSlide?: boolean;
    autoSlideInterval?: number;
    slides: Slide[];
  };