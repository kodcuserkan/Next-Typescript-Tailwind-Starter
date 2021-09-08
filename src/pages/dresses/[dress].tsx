import { FunctionComponent } from "react";

import marked from "marked";
import Image from "next/image";

import { Meta } from "../../layout/Meta";
import { Main } from "../../templates/Main";

interface IDressType {
  id: number;
  name: string;
  description: any;
  price: string;
  image: any;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
}

const Dress: FunctionComponent<{ dress: IDressType; HOST: string }> = ({
  dress: {
    description,
    name,
    image,
    // id,
    // price,
    // created_at,
    // published_at,
    // updated_at,
  },
  HOST,
}) => {
  console.log("dress image", image, "process.env.HOST ", HOST);
  return (
    <Main
      meta={<Meta title="Product Detail Page" description="Single product" />}
    >
      <div className="w-full px-2 py-4">
        <h1>Single Product Page</h1>
        {image[0]?.url && (
          <div className="w-full bg-gray-300 px-4 py-2 h-auto overflow-hidden">
            <Image
              src={`${HOST}${image[0]?.url}`}
              alt={name}
              layout="responsive"
              height={250}
              width={200}
              quality={98}
              objectFit="cover"
            />
          </div>
        )}
        <div
          className="p-4 bg-gray-200"
          dangerouslySetInnerHTML={{ __html: marked(description) }}
        />
      </div>
    </Main>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get dresses
  const res = await fetch("http://localhost:1337/dresses");
  const dresses = await res.json();
  // Get the paths we want to pre-render based on dresses
  const paths = dresses.map((dress: any) => ({
    params: { dress: String(dress.id) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = async (ctx: any) => {
  // params contains the dress `name`.
  // If the route is like /dresses/1, then params.id is 1
  const { HOST } = process.env;
  const res = await fetch(`${HOST}/dresses/${ctx.params.dress}`);
  const dress = await res.json();

  // Pass dress data to the page via props
  return { props: { dress, HOST } };
};

// export const getServerSideProps = async (ctx: any) => {
//   const res = await fetch(`http://localhost:1337/dresses/${ctx.params.dress}`);
//   // const dress = await res.json();
//   const data = await res.json();
//   console.log("dress res =====> ", data);
//   return {
//     props: { dress: data },
//   };
// };

export default Dress;
