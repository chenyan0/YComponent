<template>
    <div class="v-card" :class="classes">
        <div class="v-card-title" ref="cardTitle" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="v-card-body" ref="cardBody">
            <slot name="img"></slot>
            <div ref="info">
                <slot></slot>
            </div>
        </div>
        <div v-if="isUsed" class="v-card-footer" >
            <button>分享</button>
            <button>👍点赞</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isUsed:this.option,
        }
    },
    props:{
         shadow:{
                type:String,
                default:'never'
            },
           
        option:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        if(this.$slots.img){
            this.$refs.cardBody.style.padding='0px'
            this.$refs.info.style.padding='10px 20px'
            this.$refs.cardTitle.style.padding='0'
                
        }
    },
    computed:{
        classes:function(){
            return  [`is-${this.shadow}-shadow`]
        }
    },
    methods:{
      
    }
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
       background: #dadada;
    border: 0;
    outline: none;
    height: 24px;
    width: 60px;
    margin-right: 10px;
    }
    }
}
</style>
