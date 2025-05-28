import { ClaseTypes } from '../../Data/Clases';

export type Props = {
  items: ClaseTypes;
};

const ClaseCard = ({ items }: Props) => {
  const Icon = items.icon;

  return (
    <div className="flex h-full w-full overflow-hidden border-[1px] border-[#2A2A2A]">
      <article className="flex h-full w-full flex-col gap-4">
        <div className="relative h-[180px] w-full overflow-hidden">
          <img
            src={items.image}
            alt={items.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 bg-black/60">
            <div className="text-red-600">
              <Icon size={48} />
            </div>
            <h4 className="font-exo text-lg font-semibold text-white">
              {items.title}
            </h4>
          </div>
        </div>

        <div className="px-4 pb-4">
          <p className="text-center text-sm text-gray-400">
            {items.description}
          </p>
        </div>
      </article>
    </div>
  );
};
export default ClaseCard;
