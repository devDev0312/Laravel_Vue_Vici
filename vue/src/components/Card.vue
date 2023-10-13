<template>
    <div>
        <div class="border rounded text-xs mb-1 py-1 px-3 hover:border-2 cursor-pointer" :class="borderColor">
            <div class="text-sm text-gray-800 leading-none">{{ 'Conclllar reunion con junta de propletarioe y notaria' }}</div>
            <div v-if="state != 'Completa'">
                <div class="text-gray-400 text-xs">{{ item.estado }}</div>
                <div class="text-gray-400 text-xs">{{ item.responsable }}</div>
                <div class="text-gray-400 text-xs">{{ item.desActividad }}</div>
                <div class="text-gray-400 text-xs">{{ item.desTipoRestriccion }}</div>
            </div>
            <div class="pt-1">
                <div class="dropdown" @click="show()" @mouseleave="hide()">
                    <div v-if="state == 'Pendiente' && active == true">
                        <span class="bg-red-500 px-2 py-[2px] mr-2"><i class="fa fa-flag text-white"></i></span>
                        <span class="text-red-500"> Pendiente <i class="fa fa-chevron-down pl-2"></i></span>
                    </div>
                    <div v-if="state == 'Pendiente' && active == false">
                        <span class="bg-gray-500 px-2 py-[2px] mr-2"><i class="fa fa-flag text-white"></i></span>
                        <span class="text-gray-500"> Pendiente <i class="fa fa-chevron-down pl-2"></i></span>
                    </div>
                    <div v-if="state == 'Proceso'">
                        <span class="bg-[#dd6b20] px-2 py-[2px] mr-2"><i class="fa fa-flag text-white"></i></span>
                        <span class="text-[#dd6b20]"> Proceso <i class="fa fa-chevron-down pl-2"></i></span>
                    </div>
                    <div v-if="state == 'Completa'">
                        <span class="bg-green-600 px-2 py-[2px] mr-2"><i class="fa fa-flag text-white"></i></span>
                        <span class="text-green-600"> Completa <i class="fa fa-chevron-down pl-2"></i></span>
                    </div>
                </div>
                <div class="dropdown-content" :class="dis == true ? 'block' : 'hidden'" @mouseover="mouseoverShow()" @mouseleave="hide()"> 
                    <div v-if="state != 'Pendiente'" class="py-[2px]" @click="changeState('Pendiente')">
                        <span class="bg-red-500 px-2 py-[2px] mr-2"><i class="fa fa-flag text-white"></i></span>
                        <span class="text-red-500"> Pendiente </span>
                    </div>
                    <div v-if="state != 'Proceso'" class="py-[2px]" @click="changeState('Proceso')">
                        <span class="bg-[#dd6b20] px-2 py-[2px] mr-2"><i class="fa fa-flag text-white"></i></span>
                        <span class="text-[#dd6b20]"> Proceso </span>
                    </div>
                    <div v-if="state != 'Completa'" class="py-[2px]" @click="changeState('Completa')">
                        <span class="bg-green-600 px-2 py-[2px] mr-2"><i class="fa fa-flag text-white"></i></span>
                        <span class="text-green-600"> Completa</span>
                    </div>
                </div>
            </div>
        </div>            
    </div>
</template>
  
<script> 
export default {
    name: "card-component",
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },
    data: function () {
        return {
            state: '',
            active: false,
            dis: false,
            bgcolor: '',
        };
    },
    methods: {
        show: function () {
            if (this.dis == true) {
                this.dis = false;
            } else {
                this.dis = true;
            }
        },
        mouseoverShow: function () {
            this.dis = true;
        },
        hide: function () {
            this.dis = false;
        },
        changeState: function (para) {
            this.state = para;
            if (this.state == 'Pendiente') {
                this.borderColor = this.active == true ? 'border-red-500' : 'border-gray-500';
            } else if (this.state == 'Proceso') {
                this.borderColor = 'border-[#e5690e]'
            } else {
                this.borderColor = 'border-green-600'
            }
            this.hide();
        }
    },
    components: {
    },
    mounted: function () {
        this.state = this.item.state;
        this.active = this.item.active;
        this.changeState(this.item.state);
    }
};
</script>
<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
    display: none;
    position: relative;
    background-color: #fff;
    width:110px;
    margin-bottom:-50px;
    z-index: 1;
    padding:5px 5px;
}
</style>