<template>
        <table border="1" width="100%" cellpadding="5">
            <tr>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
            </tr>
            <tr>
                    <td>1</td>
                    <td>2</td>
                    <td> {{Total}} </td>
                    <td>1</td>
                    <td>2</td>
                    <td> {{Total}} </td>
            </tr>
    </table>
</template>

<script>
export default {
    name:'tableComp',
    computed: {
        Total() {
        return 1+5
    },
    

    }
}
</script>

<style lang="scss" scoped>
.table {
    border: 1px solid black;
}
td {
border: 1px solid black;
}

</style>