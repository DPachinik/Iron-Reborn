import { ClaseTypes } from '../../Data/Clases';

export type Props = {
  items: ClaseTypes;
};

const ClaseCard = ({ items }: Props) => {
  const Icon = items.icon;

  return (
    <div className="relative flex h-[300px] w-full rounded-xl md:w-full xl:w-[400px]">
      <img
        src={items.image}
        alt={items.title}
        className="absolute inset-0 z-0 h-[50%] w-full rounded-xl object-cover object-center"
      />

      <article className="flex h-full w-full flex-col gap-4">
        <div className="relative flex h-[50%] w-full items-center justify-center rounded-xl bg-black/70">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="z-10 text-red-600">
              <Icon size={48} />
            </div>
            <h4 className="z-10 font-exo font-semibold text-white md:text-lg">
              {items.title}
            </h4>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400">{items.description}</p>
      </article>
    </div>
  );
};
export default ClaseCard;
