1. PAGE: Create
   * Check for ingredients database
   * If exists:
      1. Use data to create Ingredient objects
      2. Populate portion size for each ingredient on page
    * If doesn’t:
        1. Retrieve nutrient info from API
        2.	Create ingredients database
        3.	Use data to create Ingredient objects
        4.	Populate portion size for each ingredient on page
    * Initialize all Nutrition Facts values to 0
    * Set event handlers for each ingredient option
      1. If something other than floating-point number (e.g., ½) entered in quantity/multiplier field, alert “only decimal numbers”
      2. If selected:
          * Multiply ingredient’s nutrient values by user-inputted multiplier (0.5, 2, etc.)
          * Add nutrient values to Nutrition Facts values
          * Add ingredient to ingredient list
      3. If deselected:
          * Multiply ingredient’s nutrient values by user-inputted multiplier (0.5, 2, etc.)
          * Subtract its nutrient values from Nutrition Facts values
          * Remove ingredient from ingredient list
    * Set event handler for Save Recipe button
      1. Create Recipe object with:
          * Ingredients
          * Ingredient quantities
          * User-inputted smoothie name
          * Nutrition label
      2. Add Recipe to new Recipes database table
      3. Indicate to user smoothie has been saved
      4. Reset ingredient list
      5. Deselect all ingredients on page
    * Set event handler for ‘See Full Label’ button
      1. Show (or create) pop-up with full nutrition facts
      2. Set event listener for X in corner to hide pop-up (or remove from DOM)


2. PAGE: Recipes
    * Create and display recipe card for each Recipe object
    * IF filters
        1. Populate filters with ingredients in user recipes
        2. Set event handlers for filters
            * If ingredient X selected, search Recipe objects’ ingredient arrays for X and show only Recipes where X.indexOf() > -1
            * If ingredient deselected, show all Recipes that fit remaining filter selections (if none, show all Recipes)


3. PAGE: Find
    * “Don’t feel like making your own smoothie today?”
    * Use Google Maps API to search for juice bars/smoothie shops near user-inputted location (and/or use GPS?)


4. (IF) PAGE: Resources
      * Smoothie recipe blog(s)
      * Smoothie recipe article(s)
      * Nutrition-related page(s)


5. PAGE: About – by decree of the Rubric, should contain:
    * URL of GitHub repo
    * User stories (Perhaps in format: “You want to experiment with smoothie recipes without making a mess in your kitchen. You want to know what your smoothies do to fuel your body…”)
    * How to use the app (“user’s guide”)
