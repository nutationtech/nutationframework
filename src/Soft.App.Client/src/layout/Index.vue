<template>
    <a-layout id="components-layout-demo-custom-trigger" style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu theme="dark" v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys" mode="inline">
                <a-menu-item key="1">
                    <pie-chart-outlined />
                    <span><user-outlined />首页</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <span><user-outlined /><span>系统管理</span></span>
                    </template>
                    <a-menu-item key="2">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <menu-unfold-outlined v-if="collapsed"
                                      class="trigger"
                                      @click="() => (collapsed = !collapsed)" />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                Content
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
    import {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    } from '@ant-design/icons-vue';

    export default {
        components: {
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            MenuUnfoldOutlined,
            MenuFoldOutlined,
        },
        data() {
            return {
                openKeys: ['sub1'],
                selectedKeys: ['2'],
                collapsed: false,
            };
        },
    };
</script>
<style>
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }

        #components-layout-demo-custom-trigger .trigger:hover {
            color: #1890ff;
        }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
</style>
