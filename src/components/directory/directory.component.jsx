import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
    console.log('Directory is running')
  return (
    <div className="directory-container">
      {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
    )
}

export default Directory