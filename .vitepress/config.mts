import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenIddict",
  description: "OpenIddict 项目文档",
  base: "/openiddict-documentation-cn/",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "介绍",
        link: "/introduction",
        activeMatch: "^/introduction"
      },
      {
        text: "指南",
        link: "/guides/",
        activeMatch: "^/guides/"
      },
      {
        text: "配置",
        link: "/configuration/",
        activeMatch: "^/configuration/"
      },
      {
        text: "集成",
        link: "/integrations/",
        activeMatch: "^/integrations/"
      },
      { text: "网站", link: "https://openiddict.com/" },
      { text: "示例", link: "https://github.com/openiddict/openiddict-samples" },
      { text: "更新日志", link: "https://github.com/openiddict/openiddict-core/releases" }
    ],

    sidebar: {
      "/introduction": {
        items: [
          {
            text: "外部资源",
            items: [
              { text: "OAuth 2.0 规范", link: "https://datatracker.ietf.org/doc/html/rfc6749" },
              { text: "OpenID Connect 规范", link: "https://openid.net/specs/openid-connect-core-1_0.html" }
            ]
          }
        ]
      },
      "/guides/": {
        items: [
          {
            text: "入门指南",
            link: "/guides/getting-started/",
            items: [
              { text: "创建自己的服务器实例", link: "/guides/getting-started/creating-your-own-server-instance" },
              { text: "在 API 中实现令牌验证", link: "/guides/getting-started/implementing-token-validation-in-your-apis" },
              { text: "与远程服务器实例集成", link: "/guides/getting-started/integrating-with-a-remote-server-instance" }
            ]
          },
          {
            text: "选择合适的流程",
            link: "/guides/choosing-the-right-flow"
          },
          {
            text: "迁移指南",
            items: [
              { text: "从 2.0 迁移到 3.0", link: "/guides/migration/20-to-30" },
              { text: "从 3.0 迁移到 4.0", link: "/guides/migration/30-to-40" },
              { text: "从 4.0 迁移到 5.0", link: "/guides/migration/40-to-50" },
              { text: "从 5.0 迁移到 6.0", link: "/guides/migration/50-to-60" }
            ]
          },
          {
            text: "贡献新的 Web 提供程序",
            link: "/guides/contributing-a-new-web-provider"
          },
          {
            text: "外部资源",
            items: [
              { text: "OAuth 2.0 规范", link: "https://datatracker.ietf.org/doc/html/rfc6749" },
              { text: "OpenID Connect 规范", link: "https://openid.net/specs/openid-connect-core-1_0.html" }
            ]
          }
        ]
      },
      "/configuration/": {
        items: [
          { text: "应用程序权限", link: "/configuration/application-permissions" },
          { text: "授权存储", link: "/configuration/authorization-storage" },
          { text: "声明目标", link: "/configuration/claim-destinations" },
          { text: "加密和签名凭据", link: "/configuration/encryption-and-signing-credentials" },
          { text: "代码交换证明密钥", link: "/configuration/proof-key-for-code-exchange" },
          { text: "推送授权请求", link: "/configuration/pushed-authorization-requests" },
          { text: "令牌格式", link: "/configuration/token-formats" },
          { text: "令牌存储", link: "/configuration/token-storage" },
          {
            text: "外部资源",
            items: [
              { text: "OAuth 2.0 规范", link: "https://datatracker.ietf.org/doc/html/rfc6749" },
              { text: "OpenID Connect 规范", link: "https://openid.net/specs/openid-connect-core-1_0.html" }
            ]
          }
        ]
      },
      "/integrations/": {
        items: [
          {
            text: "Web 主机",
            items: [
              { text: "ASP.NET Core", link: "/integrations/aspnet-core" }
            ]
          },
          {
            text: "令牌格式",
            items: [
              { text: "ASP.NET Core 数据保护", link: "/integrations/aspnet-core-data-protection" }
            ]
          },
          {
            text: "对象关系映射器和数据库",
            items: [
              { text: "Entity Framework", link: "/integrations/entity-framework" },
              { text: "Entity Framework Core", link: "/integrations/entity-framework-core" },
              { text: "MongoDB", link: "/integrations/mongodb" }
            ]
          },
          { text: "Quartz.NET", link: "/integrations/quartz" },
          { text: "操作系统", link: "/integrations/operating-systems" },
          { text: "System.Net.Http", link: "/integrations/system-net-http" },
          { text: "Web 提供程序", link: "/integrations/web-providers" },
          {
            text: "外部资源",
            items: [
              { text: "OAuth 2.0 规范", link: "https://datatracker.ietf.org/doc/html/rfc6749" },
              { text: "OpenID Connect 规范", link: "https://openid.net/specs/openid-connect-core-1_0.html" }
            ]
          }
        ]
      }
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/openiddict/openiddict-core" },
      { icon: "twitter", link: "https://x.com/openiddict" }
    ],

    outline: [2, 4],
    externalLinkIcon: true,
    logo: "/logo.png",

    editLink: {
      pattern: "https://github.com/imdabao/openiddict-documentation/edit/zh-cn/:path",
      text: "在 GitHub 上编辑此页面"
    },

    docFooter: {
      prev: false,
      next: false,
    },

    search: {
      provider: "local"
    },

    footer: {
      message: "由 VitePress 强力驱动。"
    }
  }
})
