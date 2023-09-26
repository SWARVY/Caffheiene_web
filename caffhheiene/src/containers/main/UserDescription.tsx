import { TITLE } from '@/constants/title';
import { USER } from '@/constants/user';
import Badges from '@/containers/main/Badges';
import ImageSlider from '@/containers/main/ImageSlider';
import SlideImage from '@/containers/main/SlideImage';
import { TestCarouselData } from '@/containers/main/TestSources/TestCarouselData';

export default function UserDescription() {
  return (
    <div className="grid w-full">
      <div className="flex w-full text-start gap-y-10 md:gap-y-0">
        <h1 className="text-5xl drop-shadow-xl">{USER.id}</h1>
      </div>
      <div className="grid md:grid-cols-5 w-full">
        <div className="md:p-4 md:col-span-3 space-y-3">
          <ImageSlider>
            {TestCarouselData.map((data) => (
              <SlideImage src={data.src} title={data.title} subtitle={data.subtitle} />
            ))}
          </ImageSlider>
        </div>
        <div className="grid md:p-4 md:col-span-2 gap-10">
          <div className="space-y-3">
            <h1 className="text-4xl">{TITLE.introduce}</h1>
            <p className="text-lg text-slate-500">{USER.description}</p>
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl">{TITLE.currentlyLearning}</h1>
            <Badges type="TECH" />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl">{TITLE.contact}</h1>
            <Badges type="SNS" />
          </div>
        </div>
      </div>
    </div>
  );
}
