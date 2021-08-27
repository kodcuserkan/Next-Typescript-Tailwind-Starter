import { Meta } from "../../layout/Meta";
import { Main } from "../../templates/Main";

const Dresses = () => (
  <Main
    meta={<Meta title="Products List Page" description="Here Our Products" />}
  >
    <h1>Our Products</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
  </Main>
);

export const getStaticProps = async (ctx: any) => {
  console.log("ctx =====> ", ctx);
  return {
    props: {
      dresses: [],
    },
  };
};

export default Dresses;
