import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Mantı',
    description: 'Türk mutfağının vazgeçilmez lezeetlerinden sadece biri',
    price: 64.50,
  },
  {
    id: 'm2',
    name: 'Baklava',
    description: 'Gaziantep Mutfağının gözdesi',
    price: 300,
  },
  {
    id: 'm3',
    name: 'Lahmacun',
    description: 'Taş fırında pişirilen ve kendisine özgü baharatlarla ile pişirilmiştir',
    price: 19.99,
  },
  {
    id: 'm4',
    name: 'İzmir Köftesi',
    description: 'Kendine has sosuna ilave olarak patates ve biberle hazırlanmıştır.',
    price: 48.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;