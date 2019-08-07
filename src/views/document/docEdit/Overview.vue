<template>
    <el-container class="container">
        <el-header class="header">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>帮助中心</el-breadcrumb-item>
                <el-breadcrumb-item>内容管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main class="main">
            <el-row>
                <el-col :span="21">
                    <div>&nbsp;</div>
                </el-col>
                <el-col :span="3">
                    <el-button type="primary" @click="openAddModal()">新增产品分类</el-button>
                </el-col>
            </el-row>
            <el-divider></el-divider>
            <div class="backDocument">
                <el-row v-for="subList in documentList"
                        :gutter="40">
                    <el-col class="block"
                            :span="6"
                            v-for="item in subList">
                        <ul>
                            <li class="title">
                                {{item.name}}
                                <div class="icons">
                                    <i class="el-icon-plus" @click="openAddModal(item)"></i>
                                    <i class="el-icon-edit" @click="openEditModal(item)"></i>
                                    <i class="el-icon-delete" @click="fakeDelete(item.id)"></i>
                                </div>
                            </li>
                            <el-divider></el-divider>
                            <li class="sub-title" v-for="subItem in item.children">
                                <span>{{subItem.name}}</span>
                                <div class="icons">
                                    <i class="el-icon-edit" @click="openEditModal(subItem)"></i>
                                    <i class="el-icon-delete" @click="fakeDelete(item.id)"></i>
                                </div>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
        </el-main>

        <add-doc ref="addDoc" @reload="reload()"></add-doc>
        <edit-doc ref="editDoc" @reload="reload()"></edit-doc>
    </el-container>


</template>
<script>
    import HttpService from './service/HttpService';
    import EditDoc from "./modals/EditDoc";
    import AddDoc from "./modals/AddDoc";

    export default {
        components: {
            AddDoc,
            EditDoc},
        name: "overview",
        data() {
            return {
                documentList: [],
                isVisible: false
            };
        },

        created() {
            HttpService.queryTreeByLevel(
                {level: 2},
                (data) => {
                    this.documentList = this.warpList(this.sortList(data));
                }
            );
        },

        methods: {
            sortList(list) {
                return list.sort((a, b) => {
                    return a.orderNum - b.orderNum;
                })
            },

            warpList(list) {
                let warpList = [];
                let subList = [];
                for (let i = 0; i < list.length / 4 + 1; i++) {
                    for (let j = i * 4; j < i * 4 + 4; j++) {
                        if (list[j]) {
                            subList.push(list[j]);
                        }
                    }
                    warpList.push(subList);
                    subList = [];
                }
                return warpList;
            },

            openEditModal(item) {
                this.$refs.editDoc.showModal(item);
            },

            openAddModal(item) {
                this.$refs.addDoc.showModal(item);
            },

            reload() {
                HttpService.queryTreeByLevel(
                    {level: 2},
                    (data) => {
                        this.documentList = this.warpList(this.sortList(data));
                    }
                );
            },

            fakeDelete(id) {
                this.$confirm('此操作将删除该节点, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                        HttpService.fakeDelete(
                            {id: id}
                        )
                    }
                ).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除',
                        duration: 500
                    });
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .backDocument {
        margin-top: 50px;
        margin-left: 50px !important;
        margin-right: 50px !important;
    }

    .block {
        margin-bottom: 50px;
    }

    .title {
        line-height: 1.5;
        font-weight: bold;
        font-size: 18px;
        .icons {
            float: right;
            i {
                padding: 0 5px 0 5px;
                display: none;
                &:hover {
                    cursor: pointer;
                    color: #00a4ff;
                }
            }
        }
        &:hover {
            .icons i {
                display: inline-block;
            }
        }
    }

    .sub-title {
        line-height: 2;
        span:hover {
            cursor: pointer;
        }
        .icons {
            float: right;
            i {
                padding: 0 5px 0 5px;
                display: none;
                &:hover {
                    cursor: pointer;
                    color: #00a4ff;
                }
            }
        }
        &:hover {
            background: #f3f3f3;
            .icons i {
                display: inline-block;
            }
        }
    }


</style>
