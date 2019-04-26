<template>
    <div class="v-rate" >

        <span class="v-rate-item"  v-for="(item,key) in max" :key="key" @mouseenter="handleEnter(item,$event)" @mouseleave="handleLeave" @click="selectItem(item)"> <font-awesome-icon :icon="[getIconStyle, 'star']" /></span>
     
        <span class="v-rate-item"> <font-awesome-icon :icon="['fas', 'star']" /></span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hover:false,
              currentValue: this.value,
        }
    },
    props:{
        value: {
        type: Number,
        default: 0
      },
       max: {
        type: Number,
        default: 5
      },
    },
    computed:{
      getIconStyle(item) {
        // const voidColor = this.rateDisabled ? this.disabledVoidColor : this.voidColor;
        return item <= this.currentValue ? 'fas' : 'far';
      },
    },
  
    methods:{
handleEnter(value,$event){
    console.log($event)
    this.hover=true;
    this.currentValue = value;
},
handleLeave(){
    this.hover=false;
     this.currentValue = this.value;
        this.hoverIndex = -1;

},
selectItem(item){
this.currentValue=item;
}
    },
    created(){
          if (!this.value) {
        this.$emit('input', 0);
      }
    }

}
</script>
<style lang="scss" scoped>
$class-prefix:'v-rate';
.#{$class-prefix}{

&-item{
cursor: pointer;

}
}
</style>


