interface PokemonThumbnailProps {
    name: string;
    id: number;
    imageUrl?: string;
    isLoading: boolean;
}

function CompleteId (id: number): string {
  return `#${id.toString().padStart(3, '0')}`;
}

export const PokemonThumbnail = (props: PokemonThumbnailProps) => {
  const { name, id, imageUrl } = props;
  return (
    <button className="relative border rounded-sm h-40 flex flex-col justify-end items-center p-2
                       hover:bg-gray-100 active:scale-95 transition-transform">
      <label className="absolute top-1 right-1 text-xs font-normal text-gray-600">{CompleteId(id)}</label>
      {imageUrl && (<img src={imageUrl} alt={name} className="w-30 h-30 object-contain mt-4"/>)}
      <label className="text-base font-medium text-gray-600">{name}</label>
    </button>
  );
}
