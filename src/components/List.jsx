import Card from "./Card";
import styles from "./List.module.css";

function List({ products, language, categories, selectedCategory }) {
  return (
    <div>
      {Object.keys(products).map((key) => {
        if (selectedCategory && key !== selectedCategory) {
          return null;
        }

        const categoryTitle =
          categories.find((category) => category.type === key)?.title || key;

        return (
          <div key={key} className={styles.productGroup}>
            <h2 className={styles.productGroupTitle}>{categoryTitle}</h2>
            <ul className={styles.listLayout}>
              {products[key].map((product) => (
                <li key={product.id}>
                  <Card
                    name={language === "TR" ? product.name_tr : product.name_en}
                    price={product.price}
                  />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default List;
