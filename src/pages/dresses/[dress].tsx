import { Meta } from "../../layout/Meta";
import { Main } from "../../templates/Main";

// type DressType = {
//   dress: any;
// };

const Dress = () =>
  // props: DressType
  {
    // console.log("dress props", props);
    return (
      <Main
        meta={<Meta title="Product Detail Page" description="Single product" />}
      >
        <h1>Single Product Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
          recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
          labore voluptatibus distinctio recusandae autem esse explicabo
          molestias officia placeat, accusamus aut saepe.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
          recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
          labore voluptatibus distinctio recusandae autem esse explicabo
          molestias officia placeat, accusamus aut saepe.
        </p>
      </Main>
    );
  };
// export async function getStaticPaths() {
//   // Call an external API endpoint to get dresses
//   const res = await fetch("http://localhost:1337/dresses");
//   const dresses = await res.json();

//   // Get the paths we want to pre-render based on dresses
//   const paths = dresses.map((dress: any) => ({
//     params: { name: dress.name },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// export const getStaticProps = async (ctx) => {
//   console.log("ctx =====> ", ctx);
//   // params contains the dress `name`.
//   // If the route is like /dresses/1, then params.id is 1
//   const res = await fetch(`http://localhost:1337/dresses/${ctx.params.name}`);
//   const dress = await res.json();

//   // Pass dress data to the page via props
//   return { props: { dress } };
// };

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch(`http://localhost:1337/dresses/${ctx.params.dress}`);
  // const dress = await res.json();
  const data = await res.json();
  console.log("dress res =====> ", data);
  return {
    props: { dress: data },
  };
};

export default Dress;
