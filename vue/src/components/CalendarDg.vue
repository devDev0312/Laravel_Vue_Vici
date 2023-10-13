<template>
  <div class="w-full h-screen bg-modal flex items-center justify-center modal-background fixed top-0 left-0 z-40">
    <div class="w-[95%] sm:w-[296px] rounded-2xl bg-white absolute p-16 sm:px-3 sm:py-3 overflow-y-auto">
      <img
        src="../assets/modal-close.svg"
        alt=""
        class="absolute top-4 right-4 cursor-pointer"
        @click="$emit('closeModal')"
      />
      <div class="grid grid-cols-12 gap-2 items-end mb-3">
        <div class="col-span-4 ...">
          <div class="text-xl">PANEL DE ACTIVIDADES DIARIAS</div>
          <div class="text-sm text-gray-400">Importante! : Completete los retrasados y coloque el mati`hva del retraso,</div>
        </div>
        <div class="col-span-6 ... flex">
          <span class="mx-20"><i class="fa fa-warning text-red-600"></i> 5 Actividades Retrasadas</span>
          <span><img src='../assets/calendar-edit.png' class="inline h-[18px] w-[18px]"/> 5 Actividades del dia Actual</span>
        </div>
        <div class="col-span-2 ... grid justify-items-center">
          <button class="bg-gray-600 text-white w-[190px] rounded">Samana 24</button>
          <span>{{ '< Nov 05/23 - Nov 11/23 >' }}</span>
        </div>
      </div>
      <div :class="toggle ? 'overflow-x-auto' : 'overflow-hidden'" class="grid gap-1 grid-flow-col border-double br-gray-600 border-b-4 border-t-4 text-base text">
        <!-- retrasados pannels start -->
        <div class="grid grid-cols-1 w-[278px] px-2 pt-5 bg-red-100">
          <div class="border-2 border-red-500 rounded grid items-center justify-center mt-3 mb-2 h-[30px] text-sm"><span class="w-full">{{ 'Retrasadas Actividades ' }} <i class="fa fa-warning text-red-600 pl-2"></i></span></div>
          <div>
            <div v-for="item in rawDataInicial.retrasados.slice(0, 3)" :key="item.index">
              <Card :item="item"></Card>
              <span class="text-red-500 text-[0.5rem] float-right mt-[-20px] mr-2"> {{ 'r. Conciliada: ' + item.dayFechaConciliada }}</span>
            </div>
          </div>
          <div v-if="rawDataInicial.retrasados.length > 3" class="text-center text-red-400 text-sm">
            <i class="fa fa-minus mx-2"></i>{{ rawDataInicial.retrasados.length + "Retrasadas Actividades mas" }}<i class="fa fa-minus mx-2"></i>
          </div>
          <button class="bg-red-500 text-white w-full rounded h-[30px]" @click="toggleScroll">Var mas...</button>
        </div>
        <!-- retrasados pannels end -->

        <!-- date pannels start -->
        <div v-for="card in Object.keys(rawDataInicial).slice(1, 8)" :key="card.index" class="grid grid-cols-1 w-[278px] px-2 pt-5 items-start">
          <div :class="card == 'day2' ? 'bg-blue-100' : 'bg-gray-100'" class="grid">
            <div 
              class="border rounded grid items-center align-center mt-3 mb-2 h-[30px]"
              :class="card == 'day2' ? 'border-blue-500 border-2' : 'border-gray-600'"
            >
              <span class="w-full text-sm">{{ 'Jueves 07/10/23' }} <img v-if="card == 'day2'" src='../assets/calendar-edit.png' class="inline h-[18px] w-[18px]"/></span>
            </div>
            <div>
              <div v-if="card == 'day1'" class="text-center text-red-400 text-sm">
                <i class="fa fa-minus mx-2"></i>{{ 'Actividades Retrasadas' }}<i class="fa fa-minus mx-2"></i>
              </div>
              <div v-for="item in rawDataInicial[card].filter(el => el.state == 'Pendiente' && el.active == true)" :key="item.index">
                <Card :item="item"></Card>
              </div>
              <div v-for="item in rawDataInicial[card].filter(el => el.state == 'Proceso')" :key="item.index">
                <Card :item="item"></Card>
              </div>
              <div v-if="card == 'day1' || card == 'day2'" class="text-center text-[#47ab24] text-sm">
                <i class="fa fa-minus mx-2"></i>{{ "Actividades Completadas" }}<i class="fa fa-minus mx-2"></i>
              </div>
              <div v-for="item in rawDataInicial[card].filter(el => el.state == 'Completa')" :key="item.index">
                <Card :item="item"></Card>
                <span class="text-gray-400 text-[0.5rem] float-right mt-[-20px] mr-2"> {{ 'r. Marcel: ' + item.dayFechaConciliada }}</span>
              </div>
              <div v-for="item in rawDataInicial[card].filter(el => el.state == 'Pendiente' && el.active == false)" :key="item.index">
                <Card :item="item"></Card>
              </div>
            </div>
            <button class="bg-gray-600 text-white w-full rounded my-3 h-[30px]">Var mas...</button>
          </div>
        </div>
        <!-- date pannels end -->
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: "success-component",
  props: {

  },
  components: {
    Card,
  },
  data: function () {
    return {
      rawDataInicial : {
        retrasados: [
          {id: 1, codProyecto: 10, codAnaResFrente : 1 , desAnaResFrente : 'Frente 001', codAnaResFase : 2, desAnaResFase : 'Fase 001' , dayFechaRequerida: '2023/01/01', dayFechaIdentificacion: '2023/01/01' ,codEstadoActividad:3, estado: 'Comp.Retraso', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Encofrado', desTipoRestriccion: 'Arquitectura', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: true},
          {id: 2, codProyecto: 10, codAnaResFrente : 1 , desAnaResFrente : 'Frente 001', codAnaResFase : 2, desAnaResFase : 'Fase 001' , dayFechaRequerida: '2023/01/01', dayFechaIdentificacion: '2023/01/01' ,codEstadoActividad:3, estado: 'Comp.Retraso', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Enchape', desTipoRestriccion: 'Arquitectura', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: true},
          {id: 3, codProyecto: 10, codAnaResFrente : 1 , desAnaResFrente : 'Frente 001', codAnaResFase : 2, desAnaResFase : 'Fase 001' , dayFechaRequerida: '2023/01/05', dayFechaIdentificacion: '2023/01/01' ,codEstadoActividad:2, estado: 'Retrasado', codresponsable : 2, responsable : 'Javier Melendez', desActividad : 'Enchape', desTipoRestriccion: 'Arquitectura', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: true},
          {id: 4, codProyecto: 10, codAnaResFrente : 1 , desAnaResFrente : 'Frente 001', codAnaResFase : 2, desAnaResFase : 'Fase 001' , dayFechaRequerida: '2023/01/05', dayFechaIdentificacion: '2023/01/01' , codEstadoActividad:1 ,estado: 'Pendiente', codresponsable : 3, responsable : 'Juan Perez', desActividad : 'Encofrado 2', desTipoRestriccion: 'Arquitectura', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: true},
          {id: 5, codProyecto: 10, codAnaResFrente : 1 , desAnaResFrente : 'Frente 001', codAnaResFase : 2, desAnaResFase : 'Fase 001' , dayFechaRequerida: '2023/01/08', dayFechaIdentificacion: '2023/01/01' ,codEstadoActividad:1,  estado: 'Pendiente', codresponsable : 3, responsable : 'Juan Perez', desActividad : 'Cimentacion', desTipoRestriccion: 'Arquitectura', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: true},
        ],
        day1: [
          {id: 6, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/09', dayFechaIdentificacion: '2023/02/01' ,codEstadoActividad:1, estado: 'Comp.Retraso', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: true},
          {id: 7, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2,estado: 'Comp.Plazo', codresponsable : 3, responsable : 'Juan Perez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: true},
          {id: 8, codProyecto: 11, codAnaResFrente : 3 , desAnaResFrente : 'Frente Modificado', codAnaResFase : 4, desAnaResFase : 'Fase Modificado' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2, estado: 'Comp.Plazo', codresponsable : 2, responsable : 'Javier Melendez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Completa', active: true},
          {id: 9, codProyecto: 11, codAnaResFrente : 3 , desAnaResFrente : 'Frente Modificado', codAnaResFase : 4, desAnaResFase : 'Fase Modificado' , dayFechaRequerida: '2023/02/11', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:3, estado: 'Retrasado', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Techo', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Completa', active: true},
        ],
        day2: [
          {id: 10, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/09', dayFechaIdentificacion: '2023/02/01' ,codEstadoActividad:1, estado: 'Comp.Retraso', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Proceso', active: true},
          {id: 11, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2,estado: 'Comp.Plazo', codresponsable : 3, responsable : 'Juan Perez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Proceso', active: true},
          {id: 12, codProyecto: 11, codAnaResFrente : 3 , desAnaResFrente : 'Frente Modificado', codAnaResFase : 4, desAnaResFase : 'Fase Modificado' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2, estado: 'Comp.Plazo', codresponsable : 2, responsable : 'Javier Melendez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Completa', active: true},
          {id: 13, codProyecto: 11, codAnaResFrente : 3 , desAnaResFrente : 'Frente Modificado', codAnaResFase : 4, desAnaResFase : 'Fase Modificado' , dayFechaRequerida: '2023/02/11', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:3, estado: 'Retrasado', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Techo', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Completa', active: true},
        ],
        day3: [
          {id: 14, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/09', dayFechaIdentificacion: '2023/02/01' ,codEstadoActividad:1, estado: 'Comp.Retraso', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
          {id: 15, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2,estado: 'Comp.Plazo', codresponsable : 3, responsable : 'Juan Perez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
          {id: 16, codProyecto: 11, codAnaResFrente : 3 , desAnaResFrente : 'Frente Modificado', codAnaResFase : 4, desAnaResFase : 'Fase Modificado' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2, estado: 'Comp.Plazo', codresponsable : 2, responsable : 'Javier Melendez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
        ],
        day4: [
          {id: 17, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/09', dayFechaIdentificacion: '2023/02/01' ,codEstadoActividad:1, estado: 'Comp.Retraso', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
          {id: 18, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2,estado: 'Comp.Plazo', codresponsable : 3, responsable : 'Juan Perez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
          {id: 19, codProyecto: 11, codAnaResFrente : 3 , desAnaResFrente : 'Frente Modificado', codAnaResFase : 4, desAnaResFase : 'Fase Modificado' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2, estado: 'Comp.Plazo', codresponsable : 2, responsable : 'Javier Melendez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
        ],
        day5: [
          {id: 20, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/09', dayFechaIdentificacion: '2023/02/01' ,codEstadoActividad:1, estado: 'Comp.Retraso', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
          {id: 21, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2,estado: 'Comp.Plazo', codresponsable : 3, responsable : 'Juan Perez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
          {id: 22, codProyecto: 11, codAnaResFrente : 3 , desAnaResFrente : 'Frente Modificado', codAnaResFase : 4, desAnaResFase : 'Fase Modificado' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2, estado: 'Comp.Plazo', codresponsable : 2, responsable : 'Javier Melendez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
        ],
        day6: [
          {id: 23, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/09', dayFechaIdentificacion: '2023/02/01' ,codEstadoActividad:1, estado: 'Comp.Retraso', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
          {id: 24, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2,estado: 'Comp.Plazo', codresponsable : 3, responsable : 'Juan Perez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
          {id: 25, codProyecto: 11, codAnaResFrente : 3 , desAnaResFrente : 'Frente Modificado', codAnaResFase : 4, desAnaResFase : 'Fase Modificado' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2, estado: 'Comp.Plazo', codresponsable : 2, responsable : 'Javier Melendez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
        ],
        day7: [
          {id: 26, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/09', dayFechaIdentificacion: '2023/02/01' ,codEstadoActividad:1, estado: 'Comp.Retraso', codresponsable : 1, responsable : 'Diego Warthon', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
          {id: 27, codProyecto: 10, codAnaResFrente : 2 , desAnaResFrente : 'Frente Nuevo 002', codAnaResFase : 3, desAnaResFase : 'Fase 002' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2,estado: 'Comp.Plazo', codresponsable : 3, responsable : 'Juan Perez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
          {id: 28, codProyecto: 11, codAnaResFrente : 3 , desAnaResFrente : 'Frente Modificado', codAnaResFase : 4, desAnaResFase : 'Fase Modificado' , dayFechaRequerida: '2023/02/10', dayFechaIdentificacion: '2023/02/01' , codEstadoActividad:2, estado: 'Comp.Plazo', codresponsable : 2, responsable : 'Javier Melendez', desActividad : 'Cimentacion', desTipoRestriccion: 'Construccion', dayFechaConciliada: '2020/10/12', dayFechaLevantamiento: '2020/10/12', state: 'Pendiente', active: false},
        ],
      },
      toggle: false,
    };
  },
  methods: {
    toggleScroll() {
      this.toggle = !this.toggle;
    }
  }
};
</script>

<style scoped>
.modal-background {
  background: rgba(0, 12, 30, 0.7);
}
.modal-header {
  word-break: break-word;
}
</style>