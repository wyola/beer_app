import { Beer } from "@/components/types";

type PageProps = {
  params: {
    id: string;
  };
}


export default function BeerPage({ params }: PageProps) {
  return (
    <div>
      {params.id}
    </div>
  );
}