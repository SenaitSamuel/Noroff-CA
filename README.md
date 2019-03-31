# cards

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
Install vue.js using "npm install -g @vue/cli"
create a project using " vue create Card"
> cd project
run  "npm run serve"
Adding Bootstrap styles and JavaScript using.-

  "npm install bootstrap jquery popper.js" 
install "npm install sass-loader node-sass style-loader --save-dev "

install Vue.js router to connect between pages using

 npm install --save vue-router” 

install fontawesome
 npm i --save @fortawesome/fontawesome-svg-core \
 npm i --save @fortawesome/free-solid-svg-icons \
npm i --save @fortawesome/vue-fontawesome

Create component.vue in component folder form homepage 

Cretate HomePage.vue , AboutPage.vue  ContactPage.vue Card-spcificPage.vue  inside the root of your src folder.


import the  all componet and page files into main.js like this:-
      
      import Router from 'vue-router'
      import BootstrapVue from 'bootstrap-vue'

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    Vue.use(BootstrapVue)

    

    import App from './App.vue'
    import LoginPage from './LoginPage.vue'
    import HomePage from './HomePage.vue'
    import CardSpecific from './CardSpecific.vue'
    import AboutPage from './AboutPage.vue'
    import ContactPage from './ContactPage.vue'


finally run “npm run build” to make final production. Then final html file is stored in dist folder.


