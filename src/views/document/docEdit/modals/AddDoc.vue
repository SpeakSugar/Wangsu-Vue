<template>
    <el-dialog
            :title="item ? '新增产品' : '新增产品分类'"
            :visible.sync="dialogVisible"
            width="400px">
        <el-form label-width="40px">
            <el-form-item label="名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="序号">
                <el-input v-model="form.orderNum"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="hideModal()">取消</el-button>
            <el-button type="primary" @click="confirm()">确定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import HttpService from "../service/HttpService";

    export default {
        name: "add-doc",
        data() {
            return {
                dialogVisible: false,
                form: {
                    name: '',
                    orderNum: '',
                },
                item: ''
            }
        },
        methods: {
            showModal(item) {
                console.log(item);
                this.item = item;
                this.dialogVisible = true;
                this.form.name = '';
                this.form.orderNum = '';
                item ? (this.form.parent = item.id) : (this.form.parent = null);
                item ? (this.form.level = 2) : (this.form.level = 1);
            },
            hideModal() {
                this.dialogVisible = false;
            },
            confirm() {
                HttpService.insertMenu(this.form);
                this.$emit('reload');
                this.hideModal();
            }
        }
    }
</script>

<style scoped>
    .el-input {
        width: 300px;
    }
</style>