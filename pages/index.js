import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import ProductsPage from "../components/ProductsPage";
import RosesPage from '../components/RosesPage';

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;

function IndexPage(props) {
  const { productsData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />;
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <div className="my-8">
      <div className="mt-4">
        <ProductsPage products={products} />
      </div>
      <style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Aladin;
  }

  * {
    box-sizing: border-box;
  }
`}</style>
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      productsData,
    },
  };
}

export default IndexPage;
