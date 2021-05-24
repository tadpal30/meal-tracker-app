import { useState, useEffect } from 'react';

export const useMeals = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const loadMeals = async () => {
            const response = await fetch('/meals');
            const meals = await response.json();
            setMeals(meals);
            setIsLoading(false);
        }


        loadMeals();
    }, []);


    return { isLoading, meals, setMeals };
}