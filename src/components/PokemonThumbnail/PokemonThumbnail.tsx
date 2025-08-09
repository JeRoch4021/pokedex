interface PokemonThumbnailProps {
    name: string;
    id: number;
    imageUrl?: string;
}

export const PokemonThumbnail = (props: PokemonThumbnailProps) => {
    const { name, id } = props;
  return <div className="border rounded-sm h-24">{name} {id}</div>;
}
