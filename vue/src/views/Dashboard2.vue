<template>
  <Breadcrumb :paths="['Inicio']" />
  <slot></slot>
  <div>
    <div class="xl:hidden block sm:w-full md:w-full">
      <div class="border border-gray-400 py-1 px-2">
        Leyenda de Colcres
      </div>
      <div class="flex gap-2.5 mt-2">
        <div class="w-[80px] h-[15px] bg-[#00e396]"></div>
        <div class="w-[80px] h-[15px] bg-[#00e396]"></div>
        <div class="text-[12px] text-gray-600">
          En Proceso
        </div>
      </div>
      <div class="flex gap-2.5">
        <div class="w-[80px] h-[15px] bg-[#008ffb]"></div>
        <div class="w-[80px] h-[15px] bg-[#008ffb]"></div>
        <div class="text-[12px] text-gray-600">
          Levantada
        </div>
      </div>
      <div class="flex gap-2.5">
        <div class="w-[80px] h-[15px] bg-[#feb019]"></div>
        <div class="w-[80px] h-[15px] bg-[#feb019]"></div>
        <div class="text-[12px] text-gray-600">
          Por Iniciar
        </div>
      </div>
      <div class="text-left flex flex-col font-thin text-[14px] mt-2" style="width:100%">
        <div class="black-box  mb-2 text-black h-[90px]">
          Lorem ipsum dolor sit amet, conseasdfctetur adipiscing elit. Nemper odio vitae placerat.
        </div>
        <div class="black-box  mb-2 text-black h-[90px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemper odio vitae placerat. 
        </div>
      </div>

    </div>
    <div class="flex gap-2 text-center flex-col xl:flex-row">

      <div class="block align-center gap-2 xl:w-9/12 xl:flex xl:pt-28">
        <div class="xl:w-2/12 sm:w-full md:w-full xl:mb-0 mb-4 mt-8 xl:mt-0">
          <div class=" border border-gray-400 py-1 px-2">
            Filtros
          </div>
          <div class="text-[14px] font-thin text-left w-4/12 xl:w-full">
            <div>
              <label class="font-bold">Proyocto</label>
              <select id="filter1" name="filter1" class="border border-gray-400 w-full pt-1"
                :value="selectedFilter1" v-bind:onChange="filter1">
                <option v-for="(item, index) in projectList" :value="index" :key="index">{{ item }}</option>
              </select>
            </div>
            <div>
              <label class="font-bold">Fronto</label>
              <select id="filter2" name="filter2" class="border border-gray-400 w-full pt-1"
                :value="selectedFilter1"  v-bind:onChange="filter1">
                <option v-for="(item, index) in codeproject" :value="index" :key="index">{{ item }}</option>
              </select>
            </div>
            <div>
              <label class="font-bold">Fasa</label>
              <select id="filter2" name="filter2" class="border border-gray-400 w-full pt-1"
                :value="selectedFilter1"  v-bind:onChange="filter1">
                <option v-for="(item, index) in codeproject" :value="index" :key="index">{{ item }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="xl:w-10/12 sm:w-full md:w-full ">
          <div class=" border border-gray-400 py-1 px-2 mt-8 xl:mt-0">
            Evolucion Semanal de Cant. Restriciones x Estado
          </div>
          <BarChart2 :tipo=1 :chartData="barData" :chartOptions="barOptions" :periodos=graph2_data :filterHidden=filterHidden
            @emitFilters="updateFilters" @removeFilters="removeFilters" :width="'100%'" :height="'185px'" />
        </div>
      </div>
      <div class="xl:block hidden xl:w-3/12 sm:w-full md:w-full">
        <div class="border border-gray-400 py-1 px-2">
          Leyenda de Colcres
        </div>
        <div class="flex gap-2.5 mt-2">
          <div class="w-[80px] h-[15px] bg-[#00e396]"></div>
          <div class="w-[80px] h-[15px] bg-[#00e396]"></div>
          <div class="text-[12px] text-gray-600">
            En Proceso
          </div>
        </div>
        <div class="flex gap-2.5">
          <div class="w-[80px] h-[15px] bg-[#008ffb]"></div>
          <div class="w-[80px] h-[15px] bg-[#008ffb]"></div>
          <div class="text-[12px] text-gray-600">
            Levantada
          </div>
        </div>
        <div class="flex gap-2.5">
          <div class="w-[80px] h-[15px] bg-[#feb019]"></div>
          <div class="w-[80px] h-[15px] bg-[#feb019]"></div>
          <div class="text-[12px] text-gray-600">
            Por Iniciar
          </div>
        </div>
        <div class="text-left flex flex-col font-thin text-[14px] mt-2" style="width:100%">
          <div class="black-box  mb-2 text-black h-[90px]">
            Lorem ipsum dolor sit amet, conseasdfctetur adipiscing elit. Nemper odio vitae placerat.
          </div>
          <div class="black-box  mb-2 text-black h-[90px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemper odio vitae placerat. 
          </div>
        </div>

      </div>
      
    </div>

    <div class="flex gap-2 text-center flex-col xl:flex-row">
      <div class="xl:w-3/12 sm:w-full md:w-full">
        <div class="border border-gray-400 py-1 mt-4 xl:mt-0">
          Cant. Restricciones x Estado
        </div>
        <BarChart2 :tipo=2 :chartData="barDataByState" :chartOptions="barOptionsByState" :periodos=[]
          :filterHidden=filterHidden @emitFilters="updateFilters" @removeFilters="removeFilters" :width="'200'"
          :height="'185px'" />
      </div>
      <div class="xl:w-5/12 sm:w-full md:w-full">
        <div class=" border border-gray-400 py-1 px-2 mt-4 xl:mt-0">
          Cant. Restricciones x Responsables x Estado
        </div>
        <BarChart2 :tipo=3 :chartData="barDatabyResponsable" :chartOptions="barOptions2" :periodos=graph2_data
          :filterHidden=filterHidden @emitFilters="updateFilters" @removeFilters="removeFilters" :width="'400'"
          :height="'185px'" />
      </div>
      <div class="xl:w-4/12 sm:w-full md:w-full">
        <div class=" border border-gray-400 py-1 px-2">
          Detalle de Restricciones
        </div>
        <div class="flex h-[185px] overflow-y-auto">
          <table class="w-full text-center m-3">
            <thead class="bg-gray-200 text-[12px]">
              <td v-for="value in headerCols" :id="value">{{ value }}</td>
            </thead>
            <tbody style="overflow-wrap: anywhere">
              <tr v-for="(item, index) in rawData" :id="index">
                <td>{{ item['desActividad'] }}</td>
                <td>{{ item['desTipoRestriccion'] }}</td>
                <td>{{ item['desUsuarioResponsable'] }}</td>
                <td>{{ item['dayFechaRequerida'] }}</td>
                <td>{{ item['dayFechaIdentificacion'] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart2 from '../views/BarChart2.vue'; // Asegúrate de que la ruta sea correcta
import { mapState } from 'vuex';
import store from "../store";
export default {
  components: {
    BarChart2,
  },
  data() {
    return {
      rawDataInicial: [],
      rawDataColor: {
        'Pendiente': "#008ffb",
        'Proceso': "#00e396",
        'Completado': "#feb019",
      },
      codeproject: [],

      selectedFilter1: 0,
      statefilter: [],
      orderedColors: [],
      graph2_data: [],
      barData: {},
      barDataByState: {},
      filterEstado: undefined,
      filterPeriodo: undefined,
      filterResponsable: undefined,
      filterHidden: false,
      headerCols: {
        exercise: "Actividad",
        restriction: "Restricción",
        responsible: "desUsuarioResponsable",
        date_conciliad: "F.Conciliada",
        date_required: "D.Requerida",
      },
    };
  },
  async mounted() {
    await store.dispatch('get_restrictions').then((response) => {
    });
    let projects = this.$store.state.restriction_rows_real;
    this.projectList = projects.map(item => { return item.desnombreproyecto });
    this.codeproject = projects.map(item => { return item.codProyecto });
    this.firstLogueo = this.$store.state.user.firstLogin;
    await this.callMounted();
    await this.getPendings();
    if (this.infoProyectos.length > 0) {
      this.modalName = 'ConfirmMultiple'
      console.log(">>> entramos ConfirmMultiple")
    }
    this.orderColors();
  },
  computed: {
    ...mapState(['data']),

    rawData() {
      let filtered = this.rawDataInicial;

      if (this.filterEstado !== undefined) {
        filtered = filtered.filter(item => item.desEstadoActividad === this.filterEstado);
      }

      if (this.filterPeriodo !== undefined) {

        filtered = filtered.filter(item => {
          const date = new Date(item.dayFechaIdentificacion).getYearAndMonthNumber();
          return date == this.filterPeriodo
        });
      }
      if (this.filterResponsable !== undefined) {
        filtered = filtered.filter(item => item.desUsuarioResponsable.toLowerCase().includes(this.filterResponsable.toLowerCase()));
      }
      // console.log(filtered)
      return filtered;
    },

    uniqueResponsables() {
      const responsable = this.rawData.map(item => item.desUsuarioResponsable);
      const uniqueResponsables = [...new Set(responsable)];
      return uniqueResponsables;
    },


    uniqueStates() {
      const states = this.rawData.map(item => item.desEstadoActividad);
      const uniqueStates = [...new Set(states)];
      return uniqueStates;
    },

    groupedByResponsable() {
      const groups = {};
      const statesSet = new Set();

      this.rawData.forEach(row => {
        // Lógica para determinar la semana (esto es un ejemplo)
        const responsable = row.desUsuarioResponsable; // `${new Date(row.responsable).getWeek()}`;
        //   const month = `${new Date(row.responsable).getYearAndMonthNumber()}`;

        if (!groups[responsable]) {
          groups[responsable] = {};
          groups[responsable]['data'] = {};
          // groups[week]['periodo'] = month;
        }


        if (!groups[responsable]['data'][row.desEstadoActividad]) {
          groups[responsable]['data'][row.desEstadoActividad] = 0 // [row.desEstadoActividad] = 0;

        }

        groups[responsable]['data'][row.desEstadoActividad]++;
        statesSet.add(row.desEstadoActividad);
      });

      console.log(">>> vemos el final de las condiocoones")
      console.log(groups)

      for (const responsable in groups) {
        // console.log(`Semana ||| : ${semana}`);
        // console.log(groups[semana]['periodo'])
        // this.graph2_data.push(groups[responsable]['periodo'])

        this.uniqueStates.forEach((desEstadoActividad) => {
          if (groups[responsable]['data'][desEstadoActividad] == undefined) {
            groups[responsable]['data'][desEstadoActividad] = 0
          }

        });

      }

      // this.availableStates = [...statesSet];


      const data = {}
      data['responsables'] = groups

      console.log('>>>>>>>>> aqui vemos que tal los responsables')
      console.log(groups)

      return data;
    },



    groupedByWeek() {
      const groups = {};
      const groups_m = {};
      const statesSet = new Set();

      this.rawData.forEach(row => {
        // Lógica para determinar la semana (esto es un ejemplo)
        const week = `Sem. ${new Date(row.dayFechaIdentificacion).getWeek()}`;
        console.log(week);
        const month = `${new Date(row.dayFechaIdentificacion).getYearAndMonthNumber()}`;

        if (!groups[week]) {
          groups[week] = {};
          groups[week]['data'] = {};
          groups[week]['periodo'] = month;
        }
        if (!groups_m[month]) groups_m[month] = {};

        // if (!groups_m[month]){
        if (groups_m?.[month]?.[week] == undefined) {
          groups_m[month][week] = 1
          // groups_m[month][week]['mes'] = 1
          // groups_m[month][week]['anio'] = 1
        }

        // }

        if (!groups[week]['data'][row.desEstadoActividad]) {
          groups[week]['data'][row.desEstadoActividad] = 0 // [row.desEstadoActividad] = 0;

        }

        groups[week]['data'][row.desEstadoActividad]++;
        statesSet.add(row.desEstadoActividad);
      });

      // console.log(groups)

      for (const semana in groups) {
        // console.log(`Semana ||| : ${semana}`);
        // console.log(groups[semana]['periodo'])
        this.graph2_data.push(groups[semana]['periodo'])

        this.uniqueStates.forEach((desEstadoActividad) => {
          if (groups[semana]['data'][desEstadoActividad] == undefined) {
            groups[semana]['data'][desEstadoActividad] = 0
          }

        });

      }

      this.availableStates = [...statesSet];

      const groups_months = Object.keys(groups_m).map(key => {
        return {
          title: key.convertToYearAndMonth(),
          ntitle: key,
          cols: Object.keys(groups_m[key]).length
        };
      });

      const data = {}
      data['weeks'] = groups
      data['groups'] = groups_months

      console.log('>>>>>>>>> aqui vemos que tal')
      console.log(groups)

      return data;
    },


    groupedByState() {
      const groups = {};

      this.rawData.forEach(row => {
        if (!groups[row.desEstadoActividad]) groups[row.desEstadoActividad] = 0;

        groups[row.desEstadoActividad]++;
      });

      const ordered = {};

      // Iteramos sobre cada clave en rawDataColor
      Object.keys(this.rawDataColor).forEach((key) => {
        if (groups.hasOwnProperty(key)) {
          ordered[key] = groups[key];
        }
      });

      return ordered;

    },
    barData() {
      const series = {};
      const labels = Object.keys(this.groupedByWeek['weeks']);

      labels.forEach(label => {
        const data = this.groupedByWeek['weeks'][label];

        Object.keys(data['data']).forEach(state => {
          if (!series[state]) {
            series[state] = [];
            series[state]['data'] = [];
            series[state]['periodo'] = data['periodo'];
          }

          series[state]['data'].push(data['data'][state]);
        });
      });

      const ordered = {};

      // Iteramos sobre cada clave en rawDataColor
      Object.keys(this.rawDataColor).forEach((key) => {
        if (series.hasOwnProperty(key)) {
          ordered[key] = series[key];
        }
      });

      const apexSeries = Object.keys(ordered).map(state => ({
        name: state,
        periodo: ordered[state]['periodo'],
        data: ordered[state]['data']
      }));

      console.log(">>>>>>> apexseries del primero ")
      console.log(apexSeries)

      return {
        labels,
        series: apexSeries
      };
    },
    barDataByState() {
      return {
        labels: Object.keys(this.groupedByState),
        datasets: [
          {
            data: Object.values(this.groupedByState),
          },
        ],
      };
    },
    barOptions() {
      return {
        chart: {
          type: 'bar',
          stacked: true,
        },

        colors: this.orderedColors,

        plotOptions: {
          bar: {
            borderRadius: 2,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '11px',
                  fontWeight: 900
                }
              },
              position: 'center'
            }
          }
        },
        dataLabels: {
          enabled: true
        },
        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"]
          }
        },
        yaxis: {
          title: {
            text: 'Restricciones',
            style: {
              fontSize: '11px',
              fontWeight: 700
            },
          },
        },
        xaxis: {
          categories: Object.keys(this.groupedByWeek['weeks']),
          group: {
            style: {
              fontSize: '11px',
              fontWeight: 700
            },
            groups: this.groupedByWeek['groups']
          },
        },
        // title: {
        //   text: "Frontend Test 1 - Stacked Bar Chart",
        // },
        legend: {
          show: true,
          position: 'top',
          offsetY: 10
        },

        // stroke: {
        //   width: [0, 2, 5],
        //   curve: "smooth"
        // },

        // tooltip: {
        //   shared: true,
        //   intersect: false,
        //   y: {
        //     formatter: function(y) {
        //       if (typeof y !== "undefined") {
        //         return y.toFixed(0) + " points";
        //       }
        //       return y;
        //     }
        //   }
        // }

      };
    },

    barOptionsByState() {
      return {
        chart: {
          type: 'bar',
          stacked: true,
          // events: {
          //   click: (event, chartContext, config) => {
          //     this.$emit('barClicked', config.dataPointIndex);
          //   },
          // },
        },
        plotOptions: {
          bar: {
            distributed: true  // Esto asegura que cada barra tenga un color diferente
          }
        },
        // grid: {
        //   row: {
        //     colors: ['#cccccc', '#e56b37', '#3ac189']
        //   }
        // },
        responsive: [
             {
               breakpoint: 1280,
               options: {
                 chart: {
                   width:  '100%',
                   height: 250,
                 },
               },
             },
             {
               breakpoint: 0,
               options: {
                 chart: {
                   width: 200,
                   height: 300,
                 },
               },
             },
           ],
        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"]
          }
        },
        colors: this.orderedColors,
        xaxis: {
          categories: Object.keys(this.groupedByState),
          labels: {
            // style: {
            //   colors: ['#cccccc', '#e56b37', '#3ac189'],  // Y aquí también
            // },
          },
        },

        yaxis: {
          title: {
            text: 'Restricciones',
            style: {
              fontSize: '11px',
              fontWeight: 700
            },
          },
        },
        legend: {
          show: false,
        },
      };
    },


    barDatabyResponsable() {
      const series = {};
      const labels = Object.keys(this.groupedByResponsable['responsables']);

      labels.forEach(label => {
        const data = this.groupedByResponsable['responsables'][label];

        Object.keys(data['data']).forEach(state => {
          if (!series[state]) {
            series[state] = [];
            series[state]['data'] = [];
            //   series[state]['periodo'] = data['periodo'];
          }

          series[state]['data'].push(data['data'][state]);

        });
      });

      const ordered = {};

      // Iteramos sobre cada clave en rawDataColor
      Object.keys(this.rawDataColor).forEach((key) => {
        if (series.hasOwnProperty(key)) {
          ordered[key] = series[key];
        }
      });

      const apexSeries = Object.keys(ordered).map(state => ({
        name: state,
        //   periodo : ordered[state]['periodo'],
        data: ordered[state]['data']
      }));

      console.log(">> impresion del apexseries ::")
      console.log(apexSeries)

      return {
        labels,
        series: apexSeries
      };

    },


    barOptions2() {
      return {
        chart: {
          type: 'bar',
          stacked: true,
        },

        colors: this.orderedColors,
        responsive: [
          {
            breakpoint: 1280,
            options: {
              chart: {
                width: '100%',
                height: 250,
              },
            },
          },
          {
            breakpoint: 0,
            options: {
              chart: {
                width: '400',
                height: 250,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            borderRadius: 2,
            horizontal: true,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '11px',
                  fontWeight: 900
                }
              },
              position: 'center'
            }
          }
        },
        dataLabels: {
          enabled: true
        },
        grid: {
          row: {
            colors: ["#fff", "#f2f2f2"]
          }
        },
        yaxis: {
          title: {
            text: 'Responsables',
            style: {
              fontSize: '11px',
              fontWeight: 700
            },
          },
        },
        xaxis: {
          categories: Object.keys(this.groupedByResponsable['responsables']),
          title: {
            text: 'Restricciones',
            style: {
              fontSize: '12px',
              fontWeight: 700
            },
          },

        },
        // title: {
        //   text: "Frontend Test 1 - Stacked Bar Chart",
        // },
        legend: {
          show: true,
          position: 'top',
          offsetY: 10
        },

        // stroke: {
        //   width: [0, 2, 5],
        //   curve: "smooth"
        // },

        // tooltip: {
        //   shared: true,
        //   intersect: false,
        //   y: {
        //     formatter: function(y) {
        //       if (typeof y !== "undefined") {
        //         return y.toFixed(0) + " points";
        //       }
        //       return y;
        //     }
        //   }
        // }

      };
    },


  },
  methods: {
    getPendings : async function () {
      await store.dispatch('get_projects_without_approve').then(res => {
        if(res.data.estado == true){
           this.infoProyectos = res.data.datos
        }

      });
    },
    callMounted: async function () {
      await store.dispatch("get_infoPerson");
      await store.dispatch("getNameProy").then((response) => {
        this.nameProyecto = response;
      });
      const constraintid = sessionStorage.getItem('constraintid')
      const constraintNameProy = sessionStorage.getItem('constraintNameProy')
      this.selectedFilter1 = sessionStorage.getItem('selectedFilter') ? sessionStorage.getItem('selectedFilter') : 0
      if (!constraintid && !constraintNameProy) {
        sessionStorage.setItem('constraintid', this.codeproject[this.selectedFilter1])
        sessionStorage.setItem('constraintNameProy', this.projectList[this.selectedFilter1])
      }
      await store.dispatch("get_datos_restricciones").then((response) => {
      });
      const resDataForState = this.$store.state.anaEstado
      const resDataForBars = this.$store.state.whiteproject_rows
      let states = []
      resDataForState.forEach(element => {
        states.push(element.desEstado)
      });
      this.states = states
      let datas = []
      let responsables = []
      resDataForBars.forEach(item => {
        let data = item.listaFase[0].listaRestricciones
        if (data.length) {
          data.map(d => {
            if (responsables.indexOf(d.desUsuarioResponsable) == -1) {
              responsables.unshift(d.desUsuarioResponsable)
            }
            datas.unshift(d)
          })
        }
      })
      this.rawDataInicial=datas;
      console.log('aaaaaaaaaaaaa',datas);
    },
    async filter1(e) {
      sessionStorage.setItem('constraintid', this.codeproject[e.target.value])
      sessionStorage.setItem('constraintNameProy', this.projectList[e.target.value])
      sessionStorage.setItem('selectedFilter', e.target.value)
      this.callMounted()
    },
    datatimeStyleChange(data) {
      if (data) {
        let datetime = new Date(data);
        let month = datetime.getMonth() + 1;
        let day = datetime.getDay() - 1;
        return day + '/' + month;
      }
    },
    orderColors() {
      // Obtener las claves y ordenarlas alfabéticamente
      const orderedKeys = Object.keys(this.rawDataColor);
      // Obtener los valores correspondientes a las claves ordenadas
      this.orderedColors = orderedKeys.map(key => this.rawDataColor[key]);
      // Ahora, this.orderedColors contendrá los colores en el orden alfabético de sus claves
      console.log('Colores ordenados:', this.orderedColors);
    },
    updateFilters(data) {
      this.filterEstado = data.desEstadoActividad;
      this.filterPeriodo = data.periodo;
      this.filterResponsable = data.desUsuarioResponsable;
    },
    removeFilters(data) {
      this.filterEstado = undefined;
      this.filterPeriodo = undefined;
      this.filterResponsable = undefined;
    },
    updateCharts(label) {
      console.log(label);
      // Aquí va tu lógica para actualizar los gráficos
    },
  },
};
</script>