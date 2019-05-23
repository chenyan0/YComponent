<template>
    <div class="v-card" :class="classes">
        <div class="v-card-title" ref="cardTitle" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="v-card-body" ref="cardBody" :style="bodyStyle">
            <slot></slot>
        </div>
        <div class="v-card-footer"  v-if="$slots.footer">
              <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:{
         shadow:{
                type:String,
                default:'never'
            },
            bodyStyle:{}
    },
    mounted(){
    },
    computed:{
        classes:function(){
            return  [`is-${this.shadow}-shadow`]
        }
    },
 
}
</script>
<style lang="scss" scoped>
.v-card{
    background: #fff;
    margin: 10px 0;
    border-radius: 4px;
    transition: all .5s ease ;
        border: 1px solid #ebeef5;
    &.is-always-shadow{
            box-shadow:0 2px 12px 0 rgba(0,0,0,.1)
    }
    &.is-hover-shadow:hover{
            box-shadow:0 2px 12px 0 rgba(0,0,0,.1)
    }
    .v-card-title{
              border-bottom: 1px solid #ebeef5;
    padding: 18px 20px;
    }
    .v-card-body{
        font-size: 14px;
        text-align: justify;
        padding: 20px;
    }
    .v-card-footer{
        display: flex;
    justify-content: flex-end;
    align-items: center;
        font-size: 12px;
        padding: 10px 0;
    border-top: 1px solid #ebeef5;
    button{
          background: #26a2ff;
    border: 0;
    outline: none;
    height: 24px;
    width: 60px;
    margin-right: 10px;
    color: #fff;
    border-radius: 4px;
    }
    }
}
</style>
