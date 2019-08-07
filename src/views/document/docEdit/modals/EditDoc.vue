<template>
    <el-dialog
            title="编辑"
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
        name: "edit-doc",
        data() {
            return {
                dialogVisible: false,
                form: {
                    name: '',
                    orderNum: ''
                }
            }
        },
        methods: {
            showModal(item) {
                this.dialogVisible = true;
                this.form.id = item.id;
                this.form.name = item.name;
                this.form.orderNum = item.orderNum;
            },

            hideModal() {
                this.dialogVisible = false;
            },

            confirm() {
                HttpService.updateMenu(this.form);
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