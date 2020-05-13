<template>
  <div>
    <p>RATING</p>
    <ul>
      <li
        :class="{ active: star <= initialRating }"
        v-for="star in maxStars"
        :key="star"
        class="rating-stars"
      ></li>
    </ul>
    <div class="review">{{ initialRating }} out of {{ maxStars }}</div>
  </div>
</template>

<script>
export default {
  props: {
    maxStars: {
      type: Number
    },
    initialRating: {
      type: Number
    }
  }
};
</script>
