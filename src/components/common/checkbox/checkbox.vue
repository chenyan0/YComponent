<template>
  <div :class="wrapperClasses">
    <div class="v-checkbox-inner">
      <input v-if="group" :id="id" type="checkbox" class="v-checkbox-input" v-model="model" :value="label" :name="name" :disabled="disabled" @change="change">
      <input v-else type="checkbox" :id="id" class="v-checkbox-input" :value="label" :name="name" :disabled="disabled" :checked="currentValue" @change="change">
    </div>
    <label class="v-checkbox-label" :for="id">
      <slot>
        {{label}}
      </slot>
    </label>
  </div>
</template>

<script>
  const prefixCls = `v-checkbox`;
  export default {
    data() {
      return {
        // values:[],
        model: [],
        currentValue: this.value,
        showSlot: true,
        group: false
      };
    },
  
    props: {
      id: {
        type: String,
        default: function() {
          return 'radio-id-' + this._uid;
        },
      },
      checked: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ""
      },
      trueValue: {
        type: Boolean,
        default: true
      },
      falseValue: {
        type: Boolean,
        default: false
      },
      label: {
        type: [String, Number, Boolean]
      },
    },
    computed: {
      wrapperClasses() {
        return [
          `${prefixCls}`,
          {
  
            [`${prefixCls}-checked`]: this.currentValue,
            [`${prefixCls}-disabled`]: this.disabled,
          }
  
        ]
  
      }
    },
    mounted() {
      if (this.$parent.$options.componentName == 'VCheckboxGroup') {
        this.group = true;
      }
      if (this.group) {
        this.$parent.updateModel(true);
      } else {
        this.updateModel();
        this.showSlot = this.$slots.default !== undefined;
      }
    },
    methods: {
      change(event) {
        if (this.disabled) {
          return false;
        }
        const checked = event.target.checked;
        this.currentValue = checked;
        const value = checked ? this.trueValue : this.falseValue;
        this.$emit('input', value);
  
        if (this.group) {
  
          this.$parent.change(this.model);
        } else {
          this.$emit("on-change", value);
        }
      },
      updateModel() {
        this.currentValue = this.value === this.trueValue;
      }
    },
    watch: {
      value(val) {
        if (val === this.trueValue || val === this.falseValue) {
          this.updateModel();
        } else {
          throw "Value should be trueValue or falseValue.";
        }
      },
      model(val) {}
    }
  };
</script>

<style lang="scss" scoped>
  .v-checkbox,
  .v-checkbox-inner {
    display: inline-block;
    position: relative;
  }
  
  .v-checkbox {
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #606266;
    .v-checkbox-inner {
      width: 14px;
      height: 14px;
      top: 0;
      left: 0;
      border: 1px solid #b3b3b3;
      border-radius: 2px;
      background-color: #fff;
      -webkit-transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
      transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 5px;
        position: absolute;
        top: 2px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
      .v-checkbox-input {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        margin: 0;
        z-index: 1;
        cursor: pointer;
      }
      &+.v-checkbox-label {
        padding-left: 4px;
        cursor: pointer;

      }
    }
    &.v-checkbox-disabled {
      .v-checkbox-inner {
        background-color: #edf2fc;
        border-color: #dcdfe6;
        cursor: not-allowed;
        &:after {
          border-color: #c0c4cc;
        }
        &+label {
          color: #c0c4cc!important;
          cursor: not-allowed;
        }
        .v-checkbox-input {
          cursor: not-allowed;
        }
      }
    }
  }
  
  .v-checkbox-checked {
    color: #409eff;
    .v-checkbox-inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
   
  }
</style>

