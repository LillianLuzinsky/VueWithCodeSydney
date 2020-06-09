# Code along Vue Course with Code.Sydney

## Second time taking Vue for beginners with Vue Mastery

### Purpose:

1) Take a refresher course learning beginners Vue 3
2) Learning along with a team of beginners.

---

### Day 1:

1) Installing vue into our project
2) Created a vue instance
3) Changed product in the DOM
 
#### What I've learned:

 1) Vue instance is the heart of the application.
 2) It plugs in to an element and that element displays the expression of instance's data. In this case the expression {{ product }} instanciates 'Socks'

---

### Day 2:

1) Attribute Binding with an image

### What I've learned:

1) How to add an image into the Vue Instance and then use v-bind in the html file
2) Some examples to use v-bind: :alt="description", :href="url", :title="toolTip, :class="isActive", :style="isStyled", :disabled="isDisabled"

---

### Day 3:

1) Conditional Rendering, which is display the product is in stock or not
2) How to use more complex conditional rendering
3) Apply v-show

### What I've learned:

1) How to write conditional rendering with v-if and v-else.
2) How to implement v-else-if
3) How to use v-show and how it displayed on the DOM

---

### Day 4:

1) Added products details in the data object
2) Display details list rendering onto the page with the v-for loop
3) How to write alias to display each string of the details array
4) How to render a more complex list with dot notation
5) How to us :key bind to keep track of each nodes identity.

### What I've learned

1) The expression 'details' from the HTML refers to the 'details' collection from our data.
2) 'detail' in details is the alias of the element that we're itirating on as we loop through the 'details' collection
3) We use the same 'detail' alias in the {{ detail }} expresion to loop through each item of the collection.
4) I added a new list of objects called 'variants' and was able to display only the color of the variant by writing the expression with dot notation = {{ varaint.variantColor}}

---

### Day 5:

1) Event handling with v-on to increment cart
2) Writing methods into the VUE instance
3) How to trigger methods with event handling
4) How to trigger another event to hover over different data images
5) Create v-on and function shorthands

### Other things I've learned

1) Other event handlers include: form @submit and input @keyup.enter="send"
2) .enter is a modifier. When the .enter is listened after key is pressed, a send method is triggered
3) I created a method that removed items from the cart without going below 0

---

### Day 6:

1) Style Binding
2) Disabling the cart button when product is out of stock
3) Class binding by making the 'Add to Cart' button looked disabled

### Things I've learned

1) The way to write :style is that we put the css property on the left and the right will be the expression from the Vue data
2) If we have multiple style binding we can put them as a styleObject in our data. Eg: </br>
data: {</br>
    styleObject: {</br>
        color: 'red',</br>
        fontSize: 13px</br>
    }</br>
}
3) If there are multiple styleObjects in the data, it can be :style bind into an array. Eg:</br>
data:{</br>
    styleObject1:{</br>
        color: 'red',</br>
        fontsize: '13px'</br>
    },</br>
    styleObject2:{</br>
        margin: '5px',</br>
        padding: '20px'</br>
    }</br>
}</br>
p :style="[styleObject1], [styleObject2]"
