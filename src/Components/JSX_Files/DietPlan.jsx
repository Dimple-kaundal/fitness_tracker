import React from 'react'
import '../CSS_Files/DietPlan.css'

import { useNavigate } from "react-router-dom";

export const DietPlan = ({ setDiets }) => {
  const navigate = useNavigate();

  const veganDiets = [
    {
      id: 1,
      type: "Regular",
      breakfast: "Start your morning with a creamy chia pudding topped with fresh berries and a sprinkle of granola.",
      morningSnack: "Grab a piece of fruit like an apple or a banana to keep you energized until lunch.",
      lunch: "Enjoy a colorful Mediterranean-inspired wrap filled with hummus, roasted vegetables, greens, and a sprinkle of sunflower seeds",
      afternoonSnack: "Treat yourself to a refreshing smoothie made with mixed berries, almond milk, and a dollop of almond butter.",
      dinner: "For dinner, savor a hearty bowl of coconut curry lentil soup served with a side of crusty whole grain bread."
    },
    {
      id: 2,
      type: "Gaining Weight",
      breakfast: "Start your day with a hearty tofu scramble loaded with veggies like bell peppers, spinach, and mushrooms. Pair it with a side of whole grain toast topped with smashed avocado.",
      morningSnack: "Grab a handful of mixed nuts or a homemade protein energy ball for a quick boost.",
      lunch: "Enjoy a protein-packed quinoa salad with black beans, roasted sweet potatoes, kale, and a tangy tahini dressing.",
      afternoonSnack: "Dip some carrot and cucumber sticks into a creamy hummus for a satisfying snack.",
      dinner: "- For dinner, indulge in a lentil and vegetable curry served over a bed of quinoa. Add a side of roasted Brussels sprouts for extra fiber and nutrients."
    },
    {
      id: 3,
      type: "Loosing Weight",
      breakfast: "- Kickstart your day with a refreshing green smoothie made with spinach, banana, almond milk, and a scoop of vegan protein powder.",
      morningSnack: "Munch on a small handful of almonds or rice cakes topped with avocado for a nutritious snack.",
      lunch: "Dig into a colorful Buddha bowl filled with quinoa, roasted veggies, chickpeas, and a drizzle of lemon-tahini dressing.",
      afternoonSnack: "Satisfy your hunger with a crunchy snack like air-popped popcorn or carrot sticks with hummus.",
      dinner: "Enjoy a light and flavorful dinner of zucchini noodles with marinara sauce, grilled tofu, and a side of steamed broccoli."
    }
  ];
  const vegeDiets = [
    {
      id: 1,
      type: "Regular",
      breakfast: "Start your day with a delicious avocado toast topped with sliced tomatoes and a sprinkle of dairy-free cheese. Pair it with a refreshing glass of almond milk.",
      morningSnack: "Enjoy a handful of mixed nuts and a piece of dairy-free cheese for a quick and satisfying snack.",
      lunch: "Dive into a colorful Buddha bowl filled with quinoa, roasted veggies, chickpeas, and a drizzle of tahini dressing. Don't forget to add a side of dairy-free yogurt for some extra creaminess.",
      afternoonSnack: "Treat yourself to a fruit salad with dairy-free yogurt as a sweet and refreshing pick-me-up.",
      dinner: "Feast on a hearty lentil stew with carrots, celery, and potatoes, served with a side of whole grain bread spread with dairy-free butter."
    },
    {
      id: 2,
      type: "Gaining Weight",
      breakfast: "Fuel up with a protein-packed smoothie bowl made with plant-based protein powder, almond milk, frozen berries, and topped with dairy-free yogurt and a sprinkle of granola.",
      morningSnack: "Enjoy a Greek-style dairy-free yogurt cup topped with mixed nuts and seeds for a protein boost.",
      lunch: "Dive into a hearty salad with mixed greens, grilled tofu, chickpeas, avocado, and a drizzle of dairy-free dressing.",
      afternoonSnack: "Munch on a cheese and veggie platter with dairy-free cheese slices, whole grain crackers, and sliced cucumbers.",
      dinner: "Indulge in a comforting bowl of vegan mac and cheese made with dairy-free cheese sauce, lentil pasta, and steamed broccoli on the side."
    },
    {
      id: 3,
      type: "Loosing Weight",
      breakfast: "Kickstart your day with a bowl of oatmeal topped with sliced bananas, a dollop of dairy-free yogurt, and a sprinkle of chia seeds for added fiber.",
      morningSnack: "Snack on a small portion of dairy-free yogurt with a handful of almonds for a satisfying mid-morning boost.",
      lunch: "Enjoy a colorful salad with mixed greens, roasted vegetables, quinoa, and a drizzle of dairy-free dressing for a light and nutritious meal.",
      afternoonSnack: "Munch on crunchy veggie sticks with a side of hummus for a satisfying and low-calorie snack.",
      dinner: "Dig into a flavorful veggie stir-fry with tofu, mixed vegetables, and a light soy sauce dressing served over a bed of brown rice."
    }
  ];
  const eggeDiets = [
    {
      id: 1,
      type: "Regular",
      breakfast: "Start your day with a classic breakfast of scrambled eggs with a side of avocado toast. It's a delicious and nutritious way to kick off your morning!",
      morningSnack: "Grab a handful of mixed nuts and a piece of fruit like a banana or an orange for a quick and energizing snack.",
      lunch: "Enjoy a veggie-packed frittata with bell peppers, onions, and tomatoes. Pair it with a side salad drizzled with balsamic vinaigrette for a satisfying midday meal.",
      afternoonSnack: "Snack on some carrot sticks with hummus for a crunchy and flavorful pick-me-up to keep you going until dinner.",
      dinner: "Treat yourself to a hearty dinner of vegetable stir-fry with tofu and brown rice. It's a tasty and wholesome way to end your day on a nutritious note."
      },
    {
      id: 2,
      type: "Gaining Weight",
      breakfast: "Kick off your day with a protein-packed breakfast of scrambled eggs with spinach and whole grain toast. Add a side of Greek yogurt for an extra protein boost.",
      morningSnack: "Fuel up with a handful of almonds and a hard-boiled egg for a quick and nutritious snack.",
      lunch: "Enjoy a grilled chicken salad with mixed greens, quinoa, cherry tomatoes, and a sprinkle of feta cheese for a satisfying and protein-rich meal.",
      afternoonSnack: "Snack on a protein smoothie made with whey protein powder, almond milk, banana, and a scoop of peanut butter for a delicious and energizing pick-me-up.",
      dinner: "Indulge in a hearty meal of grilled salmon with roasted sweet potatoes and steamed broccoli. Accompany it with a side of quinoa for a well-rounded and muscle-building dinner."
    },
    {
      id: 3,
      type: "Loosing Weight",
      breakfast: "Start your day with a veggie omelette made with egg whites and loaded with spinach, bell peppers, and mushrooms. Pair it with a slice of whole grain toast.",
      morningSnack: "Have a piece of fruit like an apple or a pear with a boiled egg for a nutritious and filling snack.",
      lunch: "Enjoy a light and refreshing salad with mixed greens, cherry tomatoes, cucumbers, and a boiled egg. Drizzle with a lemon vinaigrette dressing for flavor.",
      afternoonSnack: "Snack on a small portion of Greek yogurt with a sprinkle of chia seeds for a protein-rich and satisfying snack to keep you going until dinner.",
      dinner: "Opt for a grilled chicken breast with a side of roasted vegetables like zucchini, bell peppers, and asparagus. Add a small portion of quinoa for a balanced and filling meal."
    }
  ];
  const nonVegeDiets = [
    {
      id: 1,
      type: "Regular",
      breakfast: "Start your day with a classic breakfast of scrambled eggs with whole grain toast, a side of turkey bacon, and a serving of fresh fruit like berries or an apple.",
      morningSnack: "Have a small handful of mixed nuts or a piece of string cheese for a quick and convenient snack to keep your energy levels up.",
      lunch: "Enjoy a grilled chicken sandwich on whole wheat bread with lettuce, tomato, and a side of carrot sticks and hummus for a nutritious and filling midday meal.",
      afternoonSnack: "Snack on a protein bar or a Greek yogurt with a drizzle of honey for a tasty and protein-rich pick-me-up.",
      dinner: "Indulge in a comforting meal of spaghetti with meatballs (you can use lean turkey or beef) and a side salad with your favorite veggies and a light dressing."
    },
    {
      id: 2,
      type: "Gaining Weight",
      breakfast: "Kickstart your day with a protein-rich breakfast like scrambled eggs with smoked salmon and whole grain toast. It's a delicious and filling way to fuel your muscles.",
      morningSnack: "Have a Greek yogurt parfait with granola and mixed berries for a tasty and protein-packed snack to keep you energized.",
      lunch: "Dig into a grilled chicken breast salad with mixed greens, cherry tomatoes, cucumbers, and a sprinkle of nuts or seeds for added crunch and nutrients.",
      afternoonSnack: "Munch on a protein shake with banana and almond butter to give your muscles a boost before your next meal.",
      dinner: "Indulge in a hearty meal of grilled steak with sweet potato wedges and steamed broccoli. It's a satisfying and muscle-building dinner to end your day on a high note."
    },
    {
      id: 3,
      type: "Loosing Weight",
      breakfast: "Start your day with a healthy breakfast of poached eggs with whole grain toast and a side of sliced avocado. It's a nutritious and satisfying way to kick off your morning!",
      morningSnack: "Enjoy a small portion of cottage cheese with cherry tomatoes and cucumber slices for a light and protein-rich snack to keep you going.",
      lunch: "Opt for a grilled chicken salad with mixed greens, bell peppers, and a light vinaigrette dressing. It's a refreshing and low-calorie option for a midday meal.",
      afternoonSnack: "Snack on a handful of almonds or walnuts for a crunchy and satisfying snack to curb your hunger until dinner.",
      dinner: "Keep dinner light with baked fish (like salmon or tilapia) with roasted vegetables like asparagus and zucchini. It's a flavorful and lean option to end your day on a healthy note."
    }
  ]


  const handleDiets = (diets) => {
    setDiets(diets);
    console.log(diets);
    navigate("/Workout/Diets");
  };

  
  return (
    <>

      <div className="dietplangrid">

        <div className="dietplangrid-item vegan"
        onClick={() => handleDiets(veganDiets)}>
          <div className="dietplancontainer">
            <h2>Vegan</h2>
            <p>A vegan diet is a plant-based diet that excludes all animal products, including meat, fish, dairy, eggs, and even honey.</p>
          </div>

        </div>

        <div className="dietplangrid-item vegetarian"
        onClick={() => handleDiets(vegeDiets)}>
          <div className="dietplancontainer">
            <h2>Vegetarian</h2>
            <p>A vegetarian diet is a diet that excludes eggs, meat, including poultry and fish, but may include dairy products.</p>
          </div>
        </div >

        <div className="dietplangrid-item eggetarian"
        onClick={() => handleDiets(eggeDiets)}>
          <div className="dietplancontainer">
            <h2>Eggetarian</h2>
            <p>An eggetarian diet is a vegetarian diet that includes eggs, but excludes meat, fish, and poultry.</p>
          </div>
        </div>

        <div className="dietplangrid-item nonvegetarian"
        onClick={() => handleDiets(nonVegeDiets)}>
          <div className="dietplancontainer">
            <h2>Non-Vegetarian</h2>
            <p>A non-vegetarian diet, or omnivorous diet, includes both plant-based and animal-based foods.</p>
          </div>
        </div>

      </div>

    </>

  )
}

export default DietPlan;
