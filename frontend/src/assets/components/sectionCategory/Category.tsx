import Card from '../../utils/Card';

import { cardData } from '../../utils/DataCard';

const Category = () => {
    return (
        <>
            {cardData.categories.map((category) => (
                <Card
                    key={category.id}
                    variant='category'
                    img={category.img}
                    category={category.name}
                />
            ))}

        </>
    )
}

export default Category