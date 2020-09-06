<template>
        <div class="container">
            <table class="table">
                <thead>
                    <th>Price</th>
                    <th>Amount</th>
                    <th v-show="isDesktop">Total</th>
                </thead>
                <tbody>
                    <tr v-for ='ask in Asks' :key=ask[0]>
                        <td> {{ask[0]}} </td>
                        <td>{{ask[1]}}</td>
                        <td v-show="isDesktop">{{ask[0] * ask[1]}}</td>
                    </tr>
                </tbody>
            </table>
            <table class="table">
                <thead>
                    <th>Price</th>
                    <th>Amount</th>
                    <th v-show="isDesktop">Total</th>
                </thead>
                <tbody>
                    <tr v-for ='bid in Bids' :key=bid[0]>
                        <td> {{bid[0]}} </td>
                        <td>{{bid[1]}}</td>
                        <td v-show="isDesktop">{{bid[0] * bid[1]}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script>
export default {
    name:'tableComp',
    data: () => {
        return {
            width:0,
            isDesktop:true
        }
    },
    created() {
        window.addEventListener('resize',this.updWidth)
        window.addEventListener('resize',this.udDes)
    },
    computed: {
        Asks() {
            return this.$store.state.asks
        },
        Bids() {
            return this.$store.state.bids
        }
    },
    methods: {
        updWidth() {
            this.width = window.innerWidth
        },
        udDes() {
            if (this.width < 992) {
                this.isDesktop = false
            } else {
                this.isDesktop = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.container {
    overflow: scroll;
    width: 100%;
    height: 70vh;
    overflow-x: hidden;
}
.table {
    display: inline-block;
    width: 50%;
    padding: 20px;
    text-align: center;
    border-spacing: 0;
}
th {
    width: 100%;
    text-align: center;
}
td {
    width: 100%;
    padding: 10px;
    text-align: center;
}
tr:nth-child(even) { 
    background-color: rgb(185, 185, 185);
}


</style>