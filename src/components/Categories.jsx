import { Link as ScrollLink } from "react-scroll";
import styles from "./Categories.module.css";

function Categories({ categories, selectedCategory, setSelectedCategory }) {
  const handleCategoryClick = (type) => {
    if (selectedCategory === type || type === "products") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(type);
    }
  };

  return (
    <div>
      <div className={styles.categories}>
        {categories.map((category) => {
          const isSelected = selectedCategory === category.type;
          const isAllProducts = category.type === "products";

          return (
            <ScrollLink
              to="menu"
              smooth={true}
              duration={500}
              className={`${styles.item} ${isSelected ? styles.selected : ""} ${
                isAllProducts && !selectedCategory ? styles.selected : ""
              }`}
              key={category.type}
              onClick={() => handleCategoryClick(category.type)}
            >
              {category.title}
            </ScrollLink>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
