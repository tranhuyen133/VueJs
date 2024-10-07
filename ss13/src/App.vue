<template>
    <div>
      <div>
        <h1>Bai1</h1>
        <v-btn @click="handleClick">Click me</v-btn>
      </div>
      
      <div>
        <p>Bai2</p>
        <v-text-field
      v-model="state.email"
      :error-messages="v$.email.$errors.map(e => e.$message)"
      label="E-mail"
      required
      @blur="v$.email.$touch"
      @input="v$.email.$touch"
    ></v-text-field>

      </div>

      <div>
        <p>Bai3</p>
        <div class="d-flex justify-space-around">
      <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Activator slot
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
     </v-menu>
      </div>
      </div>

      <div>
        <p>Bai4</p>
      </div>

      <div>
        <p>Bai5</p>
        <v-alert
          border="top"
          type="warning"
          variant="outlined"
          prominent
    > 
      
    </v-alert>
      </div>

      <div>
        <p>Bai6</p>
        <v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
      color="surface-variant"
      text="Open Dialog"
      variant="flat"
    ></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
 
</v-dialog>
      </div>

      <div>
        <p>Bai7</p>
    
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      rounded="circle"
    ></v-pagination>

    <v-pagination
      v-model="page"
      :length="4"
      rounded="0"
    ></v-pagination>
  </div>

      </div>

      <div>
        <p>Bai8</p>
        <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
          One
        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          Two
        </v-tabs-window-item>

        <v-tabs-window-item value="three">
          Three
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
      </div>

      <div>
        <p>Bai9</p>
        <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :error-messages="select.errorMessage.value"
      :items="items"
      label="Select"
    ></v-select>

    <v-checkbox
      v-model="checkbox.value.value"
      :error-messages="checkbox.errorMessage.value"
      label="Option"
      type="checkbox"
      value="1"
    ></v-checkbox>

    <v-btn
      class="me-4"
      type="submit"
    >
      submit
    </v-btn>

    <v-btn @click="handleReset">
      clear
    </v-btn>
  </form>
      </div>

      <div>
        <p>Bai10</p>
      </div>

      
  
      <v-combobox
        v-model="city"
        label="Combobox"
        :items="['Hà Nội', 'Đà Nẵng', 'Hà Tây', 'Thanh Hóa', 'Nghệ An', 'Vinh']"
      ></v-combobox>
      <h3>Thành phố : {{ city }}</h3>
  
      <v-sheet class="mx-auto" width="300">
        <v-form @submit.prevent>
          <v-text-field
            v-model="firstName"
            :rules="rules"
            label="First name"
          ></v-text-field>
          <v-btn class="mt-2" type="submit" block>Submit</v-btn>
        </v-form>
      </v-sheet>
      <i class="fa-brands fa-twitter"></i>
    </div>
  </template>

  <script setup>
  import { reactive } from "vue";
  import { ref } from "vue";
  
  
  const city = ref("");
  const firstName = ref("");
  const rules = reactive([
    (value) => {
      if (value) return true;
  
      return "Tên ko đc để trống";
    },
  ]);
  const handleClick = () => {
    console.log("Clicked");
  };

  </script>
  
  <style></style>