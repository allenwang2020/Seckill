





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-6n1YJKtZY5Ca6umfKUilaXS5b6Cxywb+4eGfryi/HfvOYvzbbnahUwkAgkmpV9RExoZ8rSXE+q5o+j9V1KJQJQ==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-ee617bc9c481ffefa8d30b335398af1f.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-isd7kWPzwlyykVWfnxZj5sLSYcsRkpKLANxY5GFZri8eX4fhYEKn2B9N1gSQw1mUkrrRUAbOLeR8xHIXRTXkbw==" rel="stylesheet" href="https://github.githubassets.com/assets/github-712c5bb227aeaff78a6fc633b10aee1d.css" />
    
    
    
    

  <meta name="viewport" content="width=device-width">
  
  <title>miaosha/README.md at master · harryluo163/miaosha</title>
    <meta name="description" content="这个一个node.js+Kafka+redis的秒杀例子. Contribute to harryluo163/miaosha development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    <meta name="twitter:image:src" content="https://avatars0.githubusercontent.com/u/18140216?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="harryluo163/miaosha" /><meta name="twitter:description" content="这个一个node.js+Kafka+redis的秒杀例子. Contribute to harryluo163/miaosha development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars0.githubusercontent.com/u/18140216?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="harryluo163/miaosha" /><meta property="og:url" content="https://github.com/harryluo163/miaosha" /><meta property="og:description" content="这个一个node.js+Kafka+redis的秒杀例子. Contribute to harryluo163/miaosha development by creating an account on GitHub." />

  <link rel="assets" href="https://github.githubassets.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6NDQ2OTE5NzUzOjU1YmQxNWQ1ODcwN2VhZmI2NmY5NDY3Y2JhNTI2YTUxYjRlOTg2ODllYmE0N2EwNmM1YTg5MDEwMmI1Y2Q0MWY=--0fa510ee36357d09dde0717582bde5cecececfde">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="BD2F:0EA5:2BB704:517127:5DA6DE50" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="BD2F:0EA5:2BB704:517127:5DA6DE50" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-dimension-visitor_id" content="3258874315015175489" /><meta name="octolytics-actor-id" content="8997835" /><meta name="octolytics-actor-login" content="allenwang2020" /><meta name="octolytics-actor-hash" content="34588fa216a37d9009e85a5ae2b27fcf1a5a69168a276b01072d9b4cc9b13cd6" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="c05602f26b83da2fef73e8968f3e8f01">

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="allenwang2020">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NDcyY2UzMmJmYjY2NjBiMmUwYmJhNDUzMjBhMmMwOWExMjMyOWQ5MDcwNGNhMzg4YWRmMjcxYjY1MDNiZDNiYXx7InJlbW90ZV9hZGRyZXNzIjoiMTEwLjI2LjY2LjE2IiwicmVxdWVzdF9pZCI6IkJEMkY6MEVBNToyQkI3MDQ6NTE3MTI3OjVEQTZERTUwIiwidGltZXN0YW1wIjoxNTcxMjE2OTg3LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="ACTIONS_V2_ON_MARKETPLACE,MARKETPLACE_FEATURED_BLOG_POSTS,MARKETPLACE_INVOICED_BILLING,MARKETPLACE_SOCIAL_PROOF_CUSTOMERS,MARKETPLACE_TRENDING_SOCIAL_PROOF,MARKETPLACE_RECOMMENDATIONS,MARKETPLACE_PENDING_INSTALLATIONS,NOTIFY_ON_BLOCK,RELATED_ISSUES,GHE_CLOUD_TRIAL">

  <meta name="html-safe-nonce" content="db444d202c0670ff043f4485d64288671bd61945">

  <meta http-equiv="x-pjax-version" content="8b979f2ec97b5f07fdf059f890952870">
  

      <link href="https://github.com/harryluo163/miaosha/commits/master.atom" rel="alternate" title="Recent Commits to miaosha:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/harryluo163/miaosha git https://github.com/harryluo163/miaosha.git">

  <meta name="octolytics-dimension-user_id" content="18140216" /><meta name="octolytics-dimension-user_login" content="harryluo163" /><meta name="octolytics-dimension-repository_id" content="188198232" /><meta name="octolytics-dimension-repository_nwo" content="harryluo163/miaosha" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="188198232" /><meta name="octolytics-dimension-repository_network_root_nwo" content="harryluo163/miaosha" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/harryluo163/miaosha/blob/master/README.md" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <meta name="webauthn-auth-enabled" content="true">

  <meta name="webauthn-registration-enabled" content="true">

  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production emoji-size-boost page-responsive page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <span class="Progress progress-pjax-loader position-fixed width-full js-pjax-loader-bar">
      <span class="progress-pjax-loader-bar top-0 left-0" style="width: 0%;"></span>
    </span>

    
    
    


          <header class="Header js-details-container Details flex-wrap flex-lg-nowrap p-responsive" role="banner">

    <div class="Header-item d-none d-lg-flex">
      <a class="Header-link" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>

    </div>

    <div class="Header-item d-lg-none">
      <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 12 16" version="1.1" width="18" aria-hidden="true"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
      </button>
    </div>

    <div class="Header-item Header-item--full flex-column flex-lg-row width-full flex-order-2 flex-lg-order-none mr-0 mr-lg-3 mt-3 mt-lg-0 Details-content--hidden">
        <div class="header-search flex-self-stretch flex-lg-self-auto mr-0 mr-lg-3 mb-3 mb-lg-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="188198232" data-scoped-search-url="/harryluo163/miaosha/search" data-unscoped-search-url="/search" action="/harryluo163/miaosha/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=Hcx1AthtTpsNw/3xb7Z0zPukf/SnX+Z17ScOJNiuLs9AMLFEvKhWoO+4L8/G2/reaSosG8zminlB+MGcYYZfYg=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


      <nav class="d-flex flex-column flex-lg-row flex-self-stretch flex-lg-self-auto" aria-label="Global">
    <a class="Header-link d-block d-lg-none py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
    Pull requests
</a>
  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>
    <div class="mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link  mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-lg-none mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15" href="https://github.com/allenwang2020">
      <img class="avatar" height="20" width="20" alt="@allenwang2020" src="https://avatars0.githubusercontent.com/u/8997835?s=60&amp;v=4" />
      allenwang2020
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="dhi1LKbDDsi2JOT86RDjWwnLSzaFSHL5DMQDgz5wwDTLy0qEixCA0/6kwMHsE+JPgeJjPk2qQQLHmCQHZNMhcA==" />
      <button type="submit" class="Header-link mr-0 mr-lg-3 py-2 py-lg-0 border-top border-lg-top-0 border-white-fade-15 d-lg-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9V7H8V5h4V3l4 3-4 3zm-2 3H6V3L2 1h8v3h1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v11.38c0 .39.22.73.55.91L6 16.01V13h4c.55 0 1-.45 1-1V8h-1v4z"/></svg>
        Sign out
      </button>
</form></nav>

    </div>

    <div class="Header-item Header-item--full flex-justify-center d-lg-none position-relative">
      <div class="css-truncate css-truncate-target width-fit position-absolute left-0 right-0 text-center">
              <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
    <a class="Header-link" href="/harryluo163">harryluo163</a>
    /
    <a class="Header-link" href="/harryluo163/miaosha">miaosha</a>

</div>
    </div>


    <div class="Header-item mr-0 mr-lg-3 flex-order-1 flex-lg-order-none">
      

    <a aria-label="You have unread notifications" class="Header-link notification-indicator position-relative tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-hotkey="g n" data-ga-click="Header, go to notifications, icon:unread" data-channel="notification-changed:8997835" href="/notifications">
        <span class="mail-status unread"></span>
        <svg class="octicon octicon-bell" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
    </div>


    <div class="Header-item position-relative d-none d-lg-flex">
      <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"/></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="harryluo163/miaosha">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/harryluo163/miaosha/issues/new" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

    </div>

    <div class="Header-item position-relative mr-0 d-none d-lg-flex">
      
<details class="details-overlay details-reset">
  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img alt="@allenwang2020" class="avatar" src="https://avatars3.githubusercontent.com/u/8997835?s=40&amp;v=4" height="20" width="20">
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-2" style="width: 180px">
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/allenwang2020" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">allenwang2020</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context pb-1" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container
    user-status-compact rounded-1 px-2 py-1 mt-2
    border
  " data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:18140216,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:8997835,&quot;client_id&quot;:&quot;758765804.1512029505&quot;,&quot;originating_request_id&quot;:&quot;BD2F:0EA5:2BB704:517127:5DA6DE50&quot;,&quot;originating_url&quot;:&quot;https://github.com/harryluo163/miaosha/blob/master/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/harryluo163/miaosha&quot;}}" data-hydro-click-hmac="afc1226dabb3b5f6cc05f05fbe76d408365fffdbd6b9b295f76fadfe3728aa19">
      <div class="d-flex">
        <div class="f6 lh-condensed user-status-header
          d-inline-block v-align-middle
            user-status-emoji-only-header circle
            pr-2
"
            style="max-width: 29px"
          >
          <div class="user-status-emoji-container flex-shrink-0 mr-1 mt-1 lh-condensed-ultra v-align-bottom" style="">
            <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
          </div>
        </div>
        <div class="
          d-inline-block v-align-middle
          
          
           css-truncate css-truncate-target 
           user-status-message-wrapper f6"
           style="line-height: 20px;" >
          <div class="d-inline-block text-gray-dark v-align-text-top text-left">
              <span class="text-gray ml-2">Set status</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="Tdpe2TWDA5MAvTpb1cAK+XRt+2dq/J+cuVe+/1rW9kWG9c6Axe/Ry3BNoMlkZYW0VNs045caQL920H9RGb9CDg==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value="">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden></span>
                  <span class="js-user-status-custom-emoji"></span>
                  <span class="js-user-status-no-emoji-icon" >
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 01-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 01-1.45-2.17A6.59 6.59 0 011.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 018 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z"/></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value=""
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
            

<div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="f5 btn-link link-gray-dark border px-2 py-1 rounded-1" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2019-10-16T17:39:47+08:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2019-10-16T18:09:47+08:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2019-10-16T21:09:47+08:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2019-10-16T23:59:59+08:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2019-10-20T23:59:59+08:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit" disabled class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button" disabled class="width-full js-clear-user-status-button btn ml-2 ">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>


    <a role="menuitem" class="dropdown-item" href="/allenwang2020" data-ga-click="Header, go to profile, text:your profile">Your profile</a>


    <a role="menuitem" class="dropdown-item" href="/allenwang2020?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories">Your repositories</a>

    <a role="menuitem" class="dropdown-item" href="/allenwang2020?tab=projects" data-ga-click="Header, go to projects, text:your projects">Your projects</a>

    <a role="menuitem" class="dropdown-item" href="/allenwang2020?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists">Your gists</a>



    <div role="none" class="dropdown-divider"></div>
    <a role="menuitem" class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="mtxYwqLJPvyR5V9sODgRpjrMOr9XAIOHd1wI8SKl4eYnD6dqjxqw59lle1E9OxCysuUSt5/isHy8AC91eAYAog==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" role="menuitem">
        Sign out
      </button>
</form>  </details-menu>
</details>

    </div>

  </header>

      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>


    <div id="js-flash-container">

</div>



  <div class="application-main " data-commit-hovercards-enabled>
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      


  










  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav pt-0 pt-lg-4 ">
    <div class="repohead-details-container clearfix container-lg p-responsive d-none d-lg-block">

      <ul class="pagehead-actions">




  <li>
    
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form data-remote="true" class="clearfix js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="i8Sz9+KtVQoPb0cfGg20sylPirQZKinSoVxRbXnrIebbf223ZrFT3WUzN9C56rCfpLMy8s3lTJ0SwFpMWnvbNw==" />      <input type="hidden" name="repository_id" value="188198232">

      <details class="details-reset details-overlay select-menu float-left">
        <summary class="select-menu-button float-left btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:188198232,&quot;client_id&quot;:&quot;758765804.1512029505&quot;,&quot;originating_request_id&quot;:&quot;BD2F:0EA5:2BB704:517127:5DA6DE50&quot;,&quot;originating_url&quot;:&quot;https://github.com/harryluo163/miaosha/blob/master/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/harryluo163/miaosha&quot;,&quot;user_id&quot;:8997835}}" data-hydro-click-hmac="ead487c1c26827dc9f425f7eeb912f8c9e4079c47b7c8f1c356a215e7c373460" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
          </span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-mute v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/harryluo163/miaosha/watchers"
          aria-label="1 user is watching this repository">
          1
        </a>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="starred js-social-form" action="/harryluo163/miaosha/unstar" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="DX10PdJUzU9jlPwHGfhdR9DTEbu3pW3HP+yn7TiNRJuLUKy2y4A31RnVpJNIM80NXvJM9OPVyHl+Jt0yVp+5NQ==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Unstar harryluo163/miaosha" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:188198232,&quot;client_id&quot;:&quot;758765804.1512029505&quot;,&quot;originating_request_id&quot;:&quot;BD2F:0EA5:2BB704:517127:5DA6DE50&quot;,&quot;originating_url&quot;:&quot;https://github.com/harryluo163/miaosha/blob/master/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/harryluo163/miaosha&quot;,&quot;user_id&quot;:8997835}}" data-hydro-click-hmac="85455a7dd2eff45f0b251981404e23f309ad26e18a2af9851c17a14b729ee1f1" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/harryluo163/miaosha/stargazers"
           aria-label="3 users starred this repository">
           3
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="unstarred js-social-form" action="/harryluo163/miaosha/star" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="EIKuiEj7pj/rr6QRLzWn7KUvDZa13MlCDW7J/Z4GNMiKccGJN89V9dszlMMCnDFK62/oCB7b8bkzXQ+wB3nbpA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star harryluo163/miaosha" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:188198232,&quot;client_id&quot;:&quot;758765804.1512029505&quot;,&quot;originating_request_id&quot;:&quot;BD2F:0EA5:2BB704:517127:5DA6DE50&quot;,&quot;originating_url&quot;:&quot;https://github.com/harryluo163/miaosha/blob/master/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/harryluo163/miaosha&quot;,&quot;user_id&quot;:8997835}}" data-hydro-click-hmac="9749c076c5f7b06aedddd0c94c79bafc63e9e11c3663c854e6d3ca9d44c5189f" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
        Star
</button>        <a class="social-count js-social-count" href="/harryluo163/miaosha/stargazers"
           aria-label="3 users starred this repository">
          3
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="btn-with-count" action="/harryluo163/miaosha/fork" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="qzs5ELGiRfDznVn4FhBuGgJRLXQBcvILSlv8kalt5hu6tL/z0iOyHULumtpF5eHQZc4cnrPMi97x1yUTSPxHAw==" />
            <button class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:188198232,&quot;client_id&quot;:&quot;758765804.1512029505&quot;,&quot;originating_request_id&quot;:&quot;BD2F:0EA5:2BB704:517127:5DA6DE50&quot;,&quot;originating_url&quot;:&quot;https://github.com/harryluo163/miaosha/blob/master/README.md&quot;,&quot;referrer&quot;:&quot;https://github.com/harryluo163/miaosha&quot;,&quot;user_id&quot;:8997835}}" data-hydro-click-hmac="868cd092c25819b1714434966be38488e22fb64a03c68fe6186f78de55de5933" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork" type="submit" title="Fork your own copy of harryluo163/miaosha to your account" aria-label="Fork your own copy of harryluo163/miaosha to your account">              <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
</button></form>
    <a href="/harryluo163/miaosha/network/members" class="social-count"
       aria-label="3 users forked this repository">
      3
    </a>
  </li>
</ul>

      <h1 class="public ">
    <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=18140216" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/harryluo163">harryluo163</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/harryluo163/miaosha">miaosha</a></strong>
  

</h1>

    </div>
    
<nav class="hx_reponav reponav js-repo-nav js-sidenav-container-pjax container-lg p-responsive d-none d-lg-block"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
    aria-label="Repository"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /harryluo163/miaosha" href="/harryluo163/miaosha">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /harryluo163/miaosha/issues" href="/harryluo163/miaosha/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /harryluo163/miaosha/pulls" href="/harryluo163/miaosha/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>


    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /harryluo163/miaosha/projects" href="/harryluo163/miaosha/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 00-1 1v14a1 1 0 001 1h13a1 1 0 001-1V1a1 1 0 00-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>

    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /harryluo163/miaosha/wiki" href="/harryluo163/miaosha/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
    <a data-skip-pjax="true" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /harryluo163/miaosha/security/advisories" href="/harryluo163/miaosha/security/advisories">
      <svg class="octicon octicon-shield" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 2l7-2 7 2v6.02C14 12.69 8.69 16 7 16c-1.69 0-7-3.31-7-7.98V2zm1 .75L7 1l6 1.75v5.268C13 12.104 8.449 15 7 15c-1.449 0-6-2.896-6-6.982V2.75zm1 .75L7 2v12c-1.207 0-5-2.482-5-5.985V3.5z"/></svg>
      Security
</a>
    <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse people /harryluo163/miaosha/pulse" href="/harryluo163/miaosha/pulse">
      <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
      Insights
</a>

</nav>

  <div class="reponav-wrapper reponav-small d-lg-none">
  <nav class="reponav js-reponav text-center no-wrap"
       itemscope
       itemtype="http://schema.org/BreadcrumbList">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a class="js-selected-navigation-item selected reponav-item" itemprop="url" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /harryluo163/miaosha" href="/harryluo163/miaosha">
        <span itemprop="name">Code</span>
        <meta itemprop="position" content="1">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /harryluo163/miaosha/issues" href="/harryluo163/miaosha/issues">
          <span itemprop="name">Issues</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="2">
</a>      </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /harryluo163/miaosha/pulls" href="/harryluo163/miaosha/pulls">
        <span itemprop="name">Pull requests</span>
        <span class="Counter">0</span>
        <meta itemprop="position" content="3">
</a>    </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /harryluo163/miaosha/projects" href="/harryluo163/miaosha/projects">
          <span itemprop="name">Projects</span>
          <span class="Counter">0</span>
          <meta itemprop="position" content="4">
</a>      </span>

      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_wiki /harryluo163/miaosha/wiki" href="/harryluo163/miaosha/wiki">
          <span itemprop="name">Wiki</span>
          <meta itemprop="position" content="5">
</a>      </span>

      <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="security alerts policy code_scanning /harryluo163/miaosha/security/advisories" href="/harryluo163/miaosha/security/advisories">
        <span itemprop="name">Security</span>
        <meta itemprop="position" content="6">
</a>
      <a class="js-selected-navigation-item reponav-item" data-selected-links="pulse /harryluo163/miaosha/pulse" href="/harryluo163/miaosha/pulse">
        Pulse
</a>
      <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
        <a itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="community /harryluo163/miaosha/community" href="/harryluo163/miaosha/community">
          Community
</a>      </span>

  </nav>
</div>


  </div>
<div class="container-lg clearfix new-discussion-timeline experiment-repo-nav  p-responsive">
  <div class="repository-content ">

    
    


  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/harryluo163/miaosha/blob/f0a4596bcef5dc9cea36160af048b2c905e85135/README.md">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:3d1ed26ef5cd62b44333212fb303046b -->
      

    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-column flex-md-row">
      <span class="d-flex flex-justify-between width-full width-md-auto">
        
<details class="details-reset details-overlay select-menu branch-select-menu  hx_rsm" id="branch-select-menu">
  <summary class="btn btn-sm select-menu-button css-truncate"
           data-hotkey="w"
           title="Switch branches or tags">
    <i>Branch:</i>
    <span class="css-truncate-target" data-menu-button>master</span>
  </summary>

  <details-menu class="select-menu-modal hx_rsm-modal position-absolute" style="z-index: 99;" src="/harryluo163/miaosha/ref-list/master/README.md?source_action=show&amp;source_controller=blob" preload>
    <include-fragment class="select-menu-loading-overlay anim-pulse">
      <svg height="32" class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M14.7 5.34c.13-.32.55-1.59-.13-3.31 0 0-1.05-.33-3.44 1.3-1-.28-2.07-.32-3.13-.32s-2.13.04-3.13.32c-2.39-1.64-3.44-1.3-3.44-1.3-.68 1.72-.26 2.99-.13 3.31C.49 6.21 0 7.33 0 8.69 0 13.84 3.33 15 7.98 15S16 13.84 16 8.69c0-1.36-.49-2.48-1.3-3.35zM8 14.02c-3.3 0-5.98-.15-5.98-3.35 0-.76.38-1.48 1.02-2.07 1.07-.98 2.9-.46 4.96-.46 2.07 0 3.88-.52 4.96.46.65.59 1.02 1.3 1.02 2.07 0 3.19-2.68 3.35-5.98 3.35zM5.49 9.01c-.66 0-1.2.8-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.54-1.78-1.2-1.78zm5.02 0c-.66 0-1.2.79-1.2 1.78s.54 1.79 1.2 1.79c.66 0 1.2-.8 1.2-1.79s-.53-1.78-1.2-1.78z"/></svg>
    </include-fragment>
  </details-menu>
</details>

        <div class="BtnGroup flex-shrink-0 d-md-none">
          <a href="/harryluo163/miaosha/find/master"
                class="js-pjax-capture-input btn btn-sm BtnGroup-item"
                data-pjax
                data-hotkey="t">
            Find file
          </a>
          <clipboard-copy value="README.md" class="btn btn-sm BtnGroup-item">
            Copy path
          </clipboard-copy>
        </div>
      </span>
      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal flex-md-self-center ml-md-2 mr-md-3 my-2 my-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment"><a data-pjax="true" href="/harryluo163/miaosha"><span>miaosha</span></a></span></span><span class="separator">/</span><strong class="final-path">README.md</strong>
      </h2>

      <div class="BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <a href="/harryluo163/miaosha/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy value="README.md" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
    </div>



    
  <div class="Box Box--condensed d-flex flex-column flex-shrink-0">
      <div class="Box-body d-flex flex-justify-between bg-blue-light flex-column flex-md-row flex-items-start flex-md-items-center">
        <span class="pr-md-4 f6">
          <a rel="author" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=18140216" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/harryluo163"><img class="avatar" src="https://avatars2.githubusercontent.com/u/18140216?s=40&amp;v=4" width="20" height="20" alt="@harryluo163" /></a>
          <a class="text-bold link-gray-dark lh-default v-align-middle" rel="author" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=18140216" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/harryluo163">harryluo163</a>
            <span class="lh-default v-align-middle">
              <a data-pjax="true" title="增加并发判断" class="link-gray" href="/harryluo163/miaosha/commit/6dc630d6d033112d8753160f8e4c9fe221b11002">增加并发判断</a>
            </span>
        </span>
        <span class="d-inline-block flex-shrink-0 v-align-bottom f6 mt-2 mt-md-0">
          <a class="pr-2 text-mono link-gray" href="/harryluo163/miaosha/commit/6dc630d6d033112d8753160f8e4c9fe221b11002" data-pjax>6dc630d</a>
          <relative-time datetime="2019-05-24T06:26:46Z" class="no-wrap">May 24, 2019</relative-time>
        </span>
      </div>

    <div class="Box-body d-flex flex-items-center flex-auto f6 border-bottom-0 flex-wrap" >
      <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
        <summary class="btn-link">
          <span><strong>1</strong> contributor</span>
        </summary>
        <details-dialog
          class="Box Box--overlay d-flex flex-column anim-fade-in fast"
          aria-label="Users who have contributed to this file"
          src="/harryluo163/miaosha/contributors/master/README.md/list" preload>
          <div class="Box-header">
            <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
              <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
            </button>
            <h3 class="Box-title">
              Users who have contributed to this file
            </h3>
          </div>
          <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
        </details-dialog>
      </details>
    </div>
  </div>





    <div class="Box mt-3 position-relative">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      426 lines (362 sloc)
      <span class="file-info-divider"></span>
    15.6 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/harryluo163/miaosha/raw/master/README.md">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/harryluo163/miaosha/blame/master/README.md">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/harryluo163/miaosha/commits/master/README.md">History</a>
    </div>


    <div>
            <a class="btn-octicon tooltipped tooltipped-nw"
               href="github-mac://openRepo/https://github.com/harryluo163/miaosha?branch=master&amp;filepath=README.md"
               aria-label="Open this file in GitHub Desktop"
               data-ga-click="Repository, open with desktop, type:mac">
                <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
            </a>

            <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/harryluo163/miaosha/edit/master/README.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="i2H0FqId0jyYhhwZqAKPwuYCkr7+sL/qjX4H2TRxiDaBwg9vEpT0w0eX6CU9qKO4EvNNy4PTYmhU6JEjCTW+BA==" />
              <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
                aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
                <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 011.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
              </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/harryluo163/miaosha/delete/master/README.md" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Ilmbx36x7y4XCLtI0Ft7jZD9v2YpTIL/pG94lz0Vh/JFolZLDqoIiL5grAJw+lYqFmvayQnnVZm9G3FT2QZI4w==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
            </button>
</form>    </div>
  </div>
</div>




      
  <div id="readme" class="Box-body readme blob instapaper_body js-code-block-container">
    <article class="markdown-body entry-content p-3 p-md-6" itemprop="text"><h1><a id="user-content-前言" class="anchor" aria-hidden="true" href="#前言"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>前言</h1>
<p>偶然在头条看到一篇文章<a href="https://www.jianshu.com/p/c18e61d0726c" rel="nofollow">原文</a>，准备自己试一试，由于是几年前的文章，现在按照教程遇到很多坑，花了几天终于填平。</p>
<h1><a id="user-content-业务特点" class="anchor" aria-hidden="true" href="#业务特点"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>业务特点<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/80695597cee902c793cc207daf4f75b1cce48833/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343131333535323936372e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730"><img src="https://camo.githubusercontent.com/80695597cee902c793cc207daf4f75b1cce48833/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343131333535323936372e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730" alt="在这里插入图片描述" data-canonical-src="https://img-blog.csdnimg.cn/20190524113552967.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0,size_16,color_FFFFFF,t_70" style="max-width:100%;"></a></h1>
<h1><a id="user-content-技术点" class="anchor" aria-hidden="true" href="#技术点"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>技术点</h1>
<p><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/b3017213d590bf3305aaea04b5d1c14d5625de30/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343131343331363933332e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730"><img src="https://camo.githubusercontent.com/b3017213d590bf3305aaea04b5d1c14d5625de30/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343131343331363933332e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730" alt="在这里插入图片描述" data-canonical-src="https://img-blog.csdnimg.cn/20190524114316933.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0,size_16,color_FFFFFF,t_70" style="max-width:100%;"></a>
JMeter：用JMeter来模拟秒杀活动中大量并发的用户请求</p>
<p>Seckill Service：基于Nodejs使用Express实现的秒杀service，图中的步骤2，3，4都是在这个service中处理的</p>
<p>Redis：一个Redis的docker container，在其中保存一个名为counter的数据来表示当前剩余的库存大小</p>
<p>Kafka: 一个Kafka的docker container，其实这里还有一个zookeeper的docker container，Kafka用zookeeper来存放一些元数据，在程序中并没有涉及到，所以也就不单独列出来说了。Seckill service在更新完Redis之后，会发送一条消息给Kafka表示一次成功的秒杀</p>
<p>Seckill Kafka Consumer: 基于Nodejs的Kafka consumer，会从Kafka中去获取秒杀成功的消息，处理并且存储到MySQL中
MySQL：一个MySQL的docker container，最终秒杀成功的请求都会对应着数据库表中的一条记录</p>
<h1><a id="user-content-前端页面" class="anchor" aria-hidden="true" href="#前端页面"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>前端页面</h1>
<p><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/8358f1596f5376ecaa4c7a4a3e6e767c53544efd/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343133313835353333322e676966"><img src="https://camo.githubusercontent.com/8358f1596f5376ecaa4c7a4a3e6e767c53544efd/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343133313835353333322e676966" alt="在这里插入图片描述" data-canonical-src="https://img-blog.csdnimg.cn/20190524131855332.gif" style="max-width:100%;"></a></p>
<h1><a id="user-content-环境搭建" class="anchor" aria-hidden="true" href="#环境搭建"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>环境搭建</h1>
<h2><a id="user-content-1安装jmeter进行接口压力测试" class="anchor" aria-hidden="true" href="#1安装jmeter进行接口压力测试"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.安装JMeter，进行接口压力测试</h2>
<p>下载地址<a href="http://mirrors.tuna.tsinghua.edu.cn/apache//jmeter/binaries/apache-jmeter-5.1.1.tgz" rel="nofollow">添加链接描述</a>
首先更改为中文，右击左边菜单，添加-&gt;线程（用户）-&gt;线程组-&gt; 线程数-&gt;2000-&gt;时间5秒
右击线程组 -&gt;添加 -&gt;取样器 -&gt;http请求
设置 127.0.0.1 端口 3030 post请求 请求路径seckill/seckill
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/16834bc2daf808b9044ff36154fd08f2851fedc2/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343133323635343736342e676966"><img src="https://camo.githubusercontent.com/16834bc2daf808b9044ff36154fd08f2851fedc2/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343133323635343736342e676966" alt="在这里插入图片描述" data-canonical-src="https://img-blog.csdnimg.cn/20190524132654764.gif" style="max-width:100%;"></a></p>
<h2><a id="user-content-2使用docker安装redis" class="anchor" aria-hidden="true" href="#2使用docker安装redis"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2.使用Docker安装Redis</h2>
<div class="highlight highlight-source-shell"><pre>mkdir -p /var/www/redis /var/www/redis/data
docker pull  redis
<span class="pl-c1">cd</span> /var/www/redis 
创建 redis.conf 下载http://download.redis.io/redis-stable/redis.conf
找到bind 127.0.0.1，把这行前面加个<span class="pl-c"><span class="pl-c">#</span>注释掉</span>
再查找protected-mode yes 把yes修改为no

docker run -p 6379:6379 --name myredis -v /var/www/redis/redis.conf:/etc/redis/redis.conf -v /var/www/redis/data:/data -d redis redis-server /etc/redis/redis.conf --appendonly yes
进入redis
docker <span class="pl-c1">exec</span> -i -t e60da5191243 /bin/bash  
加载配置
redis-server redis.conf
设置密码在配置中修改或者直接
requirepass 密码

redis-cli -a test123
config <span class="pl-c1">set</span> requirepass 新密码
</pre></div>
<h2><a id="user-content-3使用docker安装mysql" class="anchor" aria-hidden="true" href="#3使用docker安装mysql"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3.使用Docker安装mysql</h2>
<p>第二种docker pull mysql:5.6</p>
<p>我们新建一个目录,自己随意</p>
<div class="highlight highlight-source-go"><pre>mkdir -p /<span class="pl-k">var</span>/www/mysql/data /<span class="pl-k">var</span>/www/mysql/logs /<span class="pl-k">var</span>/www/mysql/conf</pre></div>
<p><strong>第二步然后新建my.cnf</strong>，
这个是mysql的配置文件，在使用docker创建mysql，当容器删除，mysql的数据就会清空，这个时候我们需要把mysql的配置、数据、日志从容器内映射到容器外，这样数据就保持下来了</p>
<div class="highlight highlight-source-go"><pre>[mysqld]
datadir=/<span class="pl-k">var</span>/lib/mysql
socket=/<span class="pl-k">var</span>/lib/mysql/mysql.<span class="pl-smi">sock</span>
symbolic-links=<span class="pl-c1">0</span>
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
character_set_server=utf8mb4
init_connect=<span class="pl-s"><span class="pl-pds">'</span>SET NAMES utf8mb4<span class="pl-pds">'</span></span>
<span class="pl-k">default</span>-storage-engine=INNODB
collation-server=utf8mb4_general_ci
user=mysql
port=<span class="pl-c1">3306</span>
bind-address=<span class="pl-c1">0.0.0.0</span>

[mysqld_safe]
log-<span class="pl-k">error</span>=/<span class="pl-k">var</span>/log/mysqld.<span class="pl-smi">log</span>
pid-file=/<span class="pl-k">var</span>/run/mysqld/mysqld.<span class="pl-smi">pid</span>

[client]
<span class="pl-k">default</span>-character-set=utf8mb4
</pre></div>
<p>第三步启动容器设置外网访问</p>
<div class="highlight highlight-source-go"><pre>docker run -p <span class="pl-c1">3306</span>:<span class="pl-c1">3306</span> --name mymysql -v $PWD/conf/my.<span class="pl-smi">cnf</span>:/<span class="pl-k">var</span>/www/mysql/my.<span class="pl-smi">cnf</span> -v $PWD/logs:/<span class="pl-k">var</span>/www/mysql/logs -v $PWD/data:/<span class="pl-k">var</span>/www/mysql/data -e <span class="pl-v">MYSQL_ROOT_PASSWORD</span>=pass1234 -d mysql:<span class="pl-c1">5.6</span>

docker exec -it mymysql bash
 grant all privileges on *.* to root@<span class="pl-s"><span class="pl-pds">"</span><span class="pl-ii">%</span><span class="pl-pds">"</span></span> identified by <span class="pl-s"><span class="pl-pds">"</span>password<span class="pl-pds">"</span></span> with grant optio</pre></div>
<h2><a id="user-content-4安装kafka和zookeeper" class="anchor" aria-hidden="true" href="#4安装kafka和zookeeper"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4.安装Kafka和zookeeper</h2>
<p>这个单独安装有点坑，查询了官网，执行docker-compose.yml来安装吧，可以外网访问
还有几种yml安装方法
最新<a href="https://github.com/wurstmeister/kafka-docker/blob/master/docker-compose.yml">github的docker-compose.yml</a>
<a href="https://github.com/wurstmeister/kafka-docker/blob/master/docker-compose-swarm.yml">docker-compose-swarm.yml</a></p>
<div class="highlight highlight-source-yaml"><pre><span class="pl-ent">version</span>: <span class="pl-s"><span class="pl-pds">'</span>3.2<span class="pl-pds">'</span></span>
<span class="pl-ent">services</span>:
  <span class="pl-ent">zookeeper</span>:
    <span class="pl-ent">image</span>: <span class="pl-s">wurstmeister/zookeeper</span>
    <span class="pl-ent">ports</span>:
      - <span class="pl-s"><span class="pl-pds">"</span>2181:2181<span class="pl-pds">"</span></span>
  <span class="pl-ent">kafka</span>:
    <span class="pl-ent">image</span>: <span class="pl-s">wurstmeister/kafka:latest</span>
    <span class="pl-ent">ports</span>:
      - <span class="pl-s"><span class="pl-pds">"</span>9092:9092<span class="pl-pds">"</span></span>
    <span class="pl-ent">environment</span>:
      <span class="pl-ent">KAFKA_ADVERTISED_HOST_NAME</span>: <span class="pl-s">47.105.36.188</span>
      <span class="pl-ent">KAFKA_CREATE_TOPICS</span>: <span class="pl-s"><span class="pl-pds">"</span>test:1:1<span class="pl-pds">"</span></span>
      <span class="pl-ent">KAFKA_ZOOKEEPER_CONNECT</span>: <span class="pl-s">zookeeper:2181</span>
    <span class="pl-ent">volumes</span>:
      - <span class="pl-s">/var/run/docker.sock:/var/run/docker.sock</span></pre></div>
<p>然后使用 docker-compose up -d 后台运行启动，如果想测试，你可以在服务器上测试代码如下或者下载Kafka Tool 工具查看</p>
<div class="highlight highlight-source-go"><pre><span class="pl-c"><span class="pl-c">//</span> 进入kafka  （提示没找到 kafka ，使用docker ps 看id）</span>
docker exec -ti kafka /bin/bash
cd /opt/kafka_2<span class="pl-c1">.12</span>-<span class="pl-c1">2.2.0</span>
创建主题 topic
./bin/kafka-topics.<span class="pl-smi">sh</span> --create --zookeeper <span class="pl-c1">47.105.36.188</span>:<span class="pl-c1">2181</span> --replication-factor <span class="pl-c1">1</span> --partitions <span class="pl-c1">1</span> --topic mykafka
#查看主题 
bin/kafka-topics.<span class="pl-smi">sh</span> --list --zookeeper <span class="pl-c1">47.105.36.188</span>:<span class="pl-c1">2181</span>
发送消息
./bin/kafka-console-producer.<span class="pl-smi">sh</span> --broker-list <span class="pl-c1">47.105.36.188</span>:<span class="pl-c1">9092</span> --topic mykafka
接受
bin/kafka-console-producer.<span class="pl-smi">sh</span> --broker-list <span class="pl-c1">47.105.36.188</span>:<span class="pl-c1">9092</span> --topic mykafka</pre></div>
<h2><a id="user-content-5创建必要数据" class="anchor" aria-hidden="true" href="#5创建必要数据"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5.创建必要数据</h2>
<p>1.MySQL容器中创建一个名为seckill的数据表
2.Redis容器中创建一个名为counter的计数器（设置值为1000，代表库存初始值为1000）
3.需要去Kafka容器中创建一个名为CAR_NUMBER的topic（可以不需要）</p>
<div class="highlight highlight-source-sql"><pre><span class="pl-k">SET</span> NAMES utf8mb4;
<span class="pl-k">SET</span> FOREIGN_KEY_CHECKS <span class="pl-k">=</span> <span class="pl-c1">0</span>;

<span class="pl-c"><span class="pl-c">--</span> ----------------------------</span>
<span class="pl-c"><span class="pl-c">--</span> Table structure for seckill</span>
<span class="pl-c"><span class="pl-c">--</span> ----------------------------</span>
<span class="pl-k">DROP</span> <span class="pl-k">TABLE</span> IF EXISTS <span class="pl-s"><span class="pl-pds">`</span>seckill<span class="pl-pds">`</span></span>;
<span class="pl-k">CREATE</span> <span class="pl-k">TABLE</span> `<span class="pl-en">seckill</span>`  (
  <span class="pl-s"><span class="pl-pds">`</span>Id<span class="pl-pds">`</span></span> <span class="pl-k">int</span>(<span class="pl-c1">11</span>) <span class="pl-k">NOT NULL</span> AUTO_INCREMENT,
  <span class="pl-s"><span class="pl-pds">`</span>info<span class="pl-pds">`</span></span> <span class="pl-k">varchar</span>(<span class="pl-c1">255</span>) CHARACTER <span class="pl-k">SET</span> utf8 COLLATE utf8_general_ci <span class="pl-k">NULL</span> DEFAULT <span class="pl-k">NULL</span>,
  <span class="pl-s"><span class="pl-pds">`</span>date<span class="pl-pds">`</span></span> <span class="pl-k">timestamp</span>(<span class="pl-c1">0</span>) <span class="pl-k">NULL</span> DEFAULT <span class="pl-k">NULL</span>,
  <span class="pl-s"><span class="pl-pds">`</span>offset<span class="pl-pds">`</span></span> <span class="pl-k">int</span>(<span class="pl-c1">255</span>) <span class="pl-k">NULL</span> DEFAULT <span class="pl-k">NULL</span>,
  <span class="pl-k">PRIMARY KEY</span> (<span class="pl-s"><span class="pl-pds">`</span>Id<span class="pl-pds">`</span></span>) USING BTREE
) ENGINE <span class="pl-k">=</span> InnoDB AUTO_INCREMENT <span class="pl-k">=</span> <span class="pl-c1">59964</span> CHARACTER <span class="pl-k">SET</span> <span class="pl-k">=</span> utf8 COLLATE <span class="pl-k">=</span> utf8_general_ci ROW_FORMAT <span class="pl-k">=</span> Dynamic;

<span class="pl-k">SET</span> FOREIGN_KEY_CHECKS <span class="pl-k">=</span> <span class="pl-c1">1</span>;
</pre></div>
<h2><a id="user-content-6代码解析" class="anchor" aria-hidden="true" href="#6代码解析"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>6.代码解析</h2>
<h1><a id="user-content-1前端页面接口和设置了定时器查询数量" class="anchor" aria-hidden="true" href="#1前端页面接口和设置了定时器查询数量"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.前端页面接口和设置了定时器查询数量</h1>
<div class="highlight highlight-source-js"><pre>   <span class="pl-k">&lt;</span>section <span class="pl-k">class</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>_ms_box<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>
        <span class="pl-k">&lt;</span>div <span class="pl-k">class</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>uf _uf_center img_box<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>第一个商品<span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span>
        <span class="pl-k">&lt;</span>div <span class="pl-k">class</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>but_box<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>div id<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>num<span class="pl-pds">"</span></span> <span class="pl-k">class</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>uf _uf_center number<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>剩余数量<span class="pl-k">:</span><span class="pl-k">--</span><span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span>div id<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>button<span class="pl-pds">"</span></span> <span class="pl-k">class</span><span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>submit uf _uf_center button rosy<span class="pl-pds">"</span></span> onclick<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">"</span>buy()<span class="pl-pds">"</span></span><span class="pl-k">&gt;</span>秒杀<span class="pl-k">&lt;</span><span class="pl-k">/</span>button<span class="pl-k">&gt;</span>
            <span class="pl-k">&lt;</span><span class="pl-k">/</span>div<span class="pl-k">&gt;</span>
    <span class="pl-k">&lt;</span><span class="pl-k">/</span>section<span class="pl-k">&gt;</span>
    
   <span class="pl-k">var</span> job <span class="pl-k">=</span> <span class="pl-c1">setInterval</span>(<span class="pl-k">function</span> () {
            <span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({
                type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>get<span class="pl-pds">'</span></span>,
                url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>seckill/getCount<span class="pl-pds">'</span></span>,
                <span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">result</span>) {
                    <span class="pl-k">if</span> (<span class="pl-smi">result</span>.<span class="pl-smi">num</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {
                        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">"</span>#num<span class="pl-pds">"</span></span>).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">"</span>剩余数量:<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">result</span>.<span class="pl-smi">num</span>);
                        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">"</span>#button<span class="pl-pds">"</span></span>).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">"</span>background<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>#e77005<span class="pl-pds">"</span></span>)
                    } <span class="pl-k">else</span> {
                        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">"</span>#num<span class="pl-pds">"</span></span>).<span class="pl-en">html</span>(<span class="pl-s"><span class="pl-pds">"</span>剩余数量:0<span class="pl-pds">"</span></span>);
                        <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">"</span>#button<span class="pl-pds">"</span></span>).<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">"</span>background<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>#ccc<span class="pl-pds">"</span></span>)
                        <span class="pl-c1">window</span>.<span class="pl-en">clearInterval</span>(job)
                    }
                }

            })

        }, <span class="pl-c1">1000</span>)

 <span class="pl-k">function</span> <span class="pl-en">buy</span>() {
        <span class="pl-k">if</span> (isbuy) {
            <span class="pl-en">alert</span>(<span class="pl-s"><span class="pl-pds">"</span>不能购买<span class="pl-pds">"</span></span>)
        } <span class="pl-k">else</span> {
            <span class="pl-smi">$</span>.<span class="pl-en">ajax</span>({
                type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>post<span class="pl-pds">'</span></span>,
                url<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>seckill/seckill<span class="pl-pds">'</span></span>,
                <span class="pl-en">success</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">result</span>) {
                    <span class="pl-en">alert</span>(<span class="pl-smi">result</span>.<span class="pl-smi">messages</span>)
                }
            })
        }
    }</pre></div>
<h1><a id="user-content-2kafka-消费者" class="anchor" aria-hidden="true" href="#2kafka-消费者"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2.Kafka 消费者</h1>
<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> kafka <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>kafka-node<span class="pl-pds">'</span></span>);
Consumer <span class="pl-k">=</span> <span class="pl-smi">kafka</span>.<span class="pl-smi">Consumer</span>;
<span class="pl-k">var</span> kafkaClient <span class="pl-k">=</span> <span class="pl-smi">kafka</span>.<span class="pl-smi">Client</span>;
<span class="pl-k">var</span> client <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">kafkaClient</span>(<span class="pl-s"><span class="pl-pds">'</span>47.105.36.188:2181<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> parkTopicsNum <span class="pl-k">=</span> <span class="pl-c1">0</span>;
<span class="pl-k">var</span> <span class="pl-k">async</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>async<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> mysql <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>mysql<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> timeoutObj <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>, consumer <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">"</span><span class="pl-pds">"</span></span>
<span class="pl-k">var</span> connection <span class="pl-k">=</span> <span class="pl-smi">mysql</span>.<span class="pl-en">createConnection</span>({
    host<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>47.105.36.188<span class="pl-pds">'</span></span>,
    user<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>,
    password<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span>,
    database<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>seckill<span class="pl-pds">'</span></span>
});

<span class="pl-smi">connection</span>.<span class="pl-en">connect</span>();


<span class="pl-c"><span class="pl-c">//</span> 定义一个队列进行数据保存</span>
<span class="pl-k">var</span> q <span class="pl-k">=</span> <span class="pl-k">async</span>.<span class="pl-en">queue</span>(<span class="pl-k">function</span> (<span class="pl-smi">message</span>, <span class="pl-smi">callback</span>) {
    <span class="pl-k">async</span>.<span class="pl-en">waterfall</span>([
        <span class="pl-k">function</span> (<span class="pl-smi">cb</span>) {
            <span class="pl-c"><span class="pl-c">//</span>查询数据库中是否存在</span>
       <span class="pl-smi">connection</span>.<span class="pl-en">query</span>(<span class="pl-s"><span class="pl-pds">"</span>select count(1) num  from seckill where info='<span class="pl-pds">"</span></span><span class="pl-k">+</span>  <span class="pl-smi">message</span>.<span class="pl-c1">value</span> <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">"</span>'<span class="pl-pds">"</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">error</span>, <span class="pl-smi">results</span>, <span class="pl-smi">fields</span>) {
                <span class="pl-en">cb</span>(<span class="pl-c1">null</span>, results[<span class="pl-c1">0</span>].<span class="pl-smi">num</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>);
            })
        }, <span class="pl-k">function</span> (<span class="pl-smi">data</span>, <span class="pl-smi">cb</span>) {
            <span class="pl-c"><span class="pl-c">//</span>不存在就插入</span>
            <span class="pl-k">if</span> (data) {
                <span class="pl-smi">connection</span>.<span class="pl-en">query</span>(<span class="pl-s"><span class="pl-pds">'</span>INSERT INTO seckill set ?<span class="pl-pds">'</span></span>, {
                    date<span class="pl-k">:</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>(),
                    info<span class="pl-k">:</span> <span class="pl-smi">message</span>.<span class="pl-c1">value</span>,
                    offset<span class="pl-k">:</span> <span class="pl-smi">message</span>.<span class="pl-smi">offset</span>
                }, <span class="pl-k">function</span> (<span class="pl-smi">error</span>, <span class="pl-smi">results</span>, <span class="pl-smi">fields</span>) {
                    <span class="pl-k">if</span> (error) {
                        <span class="pl-en">console</span>.<span class="pl-c1">error</span>(error);
                    }
                    <span class="pl-en">callback</span>();
                })
            }

        }
    ])


}, <span class="pl-c1">2</span>);
<span class="pl-c"><span class="pl-c">//</span>worker数量将用完时，会调用saturated函数</span>
<span class="pl-smi">q</span>.<span class="pl-en">saturated</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">"</span>all workers to be used<span class="pl-pds">"</span></span>);
}
<span class="pl-c"><span class="pl-c">//</span>当最后一个任务交给worker执行时，会调用empty函数</span>
<span class="pl-smi">q</span>.<span class="pl-en">empty</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">"</span>no more tasks wating<span class="pl-pds">"</span></span>);
}
<span class="pl-c"><span class="pl-c">//</span>当所有任务都执行完时，会调用drain函数</span>
<span class="pl-smi">q</span>.<span class="pl-en">drain</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {
    <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">"</span>all tasks have been processed<span class="pl-pds">"</span></span>);
}

<span class="pl-k">function</span> <span class="pl-en">consumerdo</span>() {
    <span class="pl-c"><span class="pl-c">//</span>获取最大偏移值，再初始化</span>
    <span class="pl-smi">connection</span>.<span class="pl-en">query</span>(<span class="pl-s"><span class="pl-pds">'</span>select max(offset) as offset from seckill<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">error</span>, <span class="pl-smi">results</span>, <span class="pl-smi">fields</span>) {
        <span class="pl-k">if</span> (results[<span class="pl-c1">0</span>].<span class="pl-smi">offset</span> <span class="pl-k">!=</span> <span class="pl-c1">null</span>) {
            parkTopicsNum <span class="pl-k">=</span> results[<span class="pl-c1">0</span>].<span class="pl-smi">offset</span>;
        } <span class="pl-k">else</span> {
            parkTopicsNum <span class="pl-k">=</span> <span class="pl-c1">0</span>
        }

        <span class="pl-c"><span class="pl-c">//</span>设置消费者读取偏移值</span>
        consumer <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Consumer</span>(
            client,
            [
                {topic<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>CAR_NUMBER<span class="pl-pds">'</span></span>, partition<span class="pl-k">:</span> <span class="pl-c1">0</span>, offset<span class="pl-k">:</span> parkTopicsNum}
            ],
            {
                groupId<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>kafka-node-group<span class="pl-pds">'</span></span>,<span class="pl-c"><span class="pl-c">//</span>使用者组ID，默认`kafka-node-group` </span>
                <span class="pl-c"><span class="pl-c">//</span>自动提交配置 </span>
                autoCommit<span class="pl-k">:</span> <span class="pl-c1">false</span>,
                autoCommitIntervalMs<span class="pl-k">:</span> <span class="pl-c1">5000</span>,
                <span class="pl-c"><span class="pl-c">//</span>最长等待时间是最长时间如果在发出请求时数据不足,则以毫秒为单位阻止等待，默认为100ms</span>
                fetchMaxWaitMs<span class="pl-k">:</span> <span class="pl-c1">100</span>,
                <span class="pl-c"><span class="pl-c">//</span>  //这是必须可用于提供响应的消息的最小字节数，默认为1字节 </span>
                fetchMinBytes<span class="pl-k">:</span> <span class="pl-c1">1</span>,
                <span class="pl-c"><span class="pl-c">//</span> 要包含在此分区的消息集中的最大字节数。这有助于限制响应的大小.</span>
                fetchMaxBytes<span class="pl-k">:</span> <span class="pl-c1">1024</span> <span class="pl-k">*</span> <span class="pl-c1">1024</span>,
                <span class="pl-c"><span class="pl-c">//</span> 如果设置为true，则consumer将从有效负载中的给定偏移量中获取消息 </span>
                fromOffset<span class="pl-k">:</span> <span class="pl-c1">true</span>,
                <span class="pl-c"><span class="pl-c">//</span> 如果设置为“buffer”，则值将作为原始缓冲区对象返回。</span>
                encoding<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>utf8<span class="pl-pds">'</span></span>,
                keyEncoding<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>utf8<span class="pl-pds">'</span></span>
            }
        );

        <span class="pl-smi">consumer</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">'</span>message<span class="pl-pds">'</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">message</span>) {


            <span class="pl-k">if</span> (<span class="pl-smi">message</span>.<span class="pl-smi">offset</span> <span class="pl-k">&gt;</span> parkTopicsNum) {
                <span class="pl-c"><span class="pl-c">//</span>偏移值+1</span>
                parkTopicsNum <span class="pl-k">+=</span> <span class="pl-c1">1</span>;
                <span class="pl-smi">q</span>.<span class="pl-c1">push</span>(message)
            }

        });

        <span class="pl-smi">consumer</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">"</span>error<span class="pl-pds">"</span></span>, <span class="pl-k">function</span> (<span class="pl-smi">message</span>) {
            <span class="pl-en">console</span>.<span class="pl-c1">log</span>(message);
            <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">"</span>kafka错误<span class="pl-pds">"</span></span>);
        });

    })
}


<span class="pl-c1">exports</span>.<span class="pl-smi">consumerdo</span> <span class="pl-k">=</span> consumerdo
</pre></div>
<p>由于node.js 代码的特殊性，所以定义了一个队列来接受处理数据，也是官方最新推荐的写法</p>
<h2><a id="user-content-how-to-throttle-messages--control-the-concurrency-of-processing-messages" class="anchor" aria-hidden="true" href="#how-to-throttle-messages--control-the-concurrency-of-processing-messages"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to throttle messages / control the concurrency of processing messages</h2>
<p>Create a <strong>async.queue</strong> with message processor and concurrency of one (the message processor itself is wrapped with setImmediate so it will not freeze up the event loop)
Set the queue.drain to resume the consumer
The handler for consumer's message event pauses the consumer and pushes the message to the queue.
然后由于Kafka是批量接收消息，循环接受消息，所以我在首次启动获取最大偏移值，再初始化，这样就可以从最新数据获取</p>
<div class="highlight highlight-source-go"><pre>  consumer = new <span class="pl-c1">Consumer</span>(
            client,
            [
                {topic: <span class="pl-s"><span class="pl-pds">'</span>CAR_NUMBER<span class="pl-pds">'</span></span>, partition: <span class="pl-c1">0</span>, offset: parkTopicsNum}
            ],</pre></div>
<p>然后每次插入先查询是否插入再保存，然后初始化Consumer的配置大家可以看注释增加</p>
<h2><a id="user-content-3秒杀接口" class="anchor" aria-hidden="true" href="#3秒杀接口"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3.秒杀接口</h2>
<div class="highlight highlight-source-go"><pre><span class="pl-k">var</span> <span class="pl-smi">express</span> = <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>express<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> <span class="pl-smi">router</span> = express.<span class="pl-c1">Router</span>();
<span class="pl-k">var</span> <span class="pl-smi">redis</span> = <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>redis<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> <span class="pl-smi">bluebird</span> = <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>bluebird<span class="pl-pds">'</span></span>);
bluebird.<span class="pl-c1">promisifyAll</span>(redis.<span class="pl-smi">RedisClient</span>.<span class="pl-smi">prototype</span>);
bluebird.<span class="pl-c1">promisifyAll</span>(redis.<span class="pl-smi">Multi</span>.<span class="pl-smi">prototype</span>);
<span class="pl-k">var</span> <span class="pl-smi">kafka</span> = <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>kafka-node<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> <span class="pl-smi">Producer</span> = kafka.<span class="pl-smi">Producer</span>;
<span class="pl-k">var</span> <span class="pl-smi">kafkaClient</span> = kafka.<span class="pl-smi">Client</span>;
<span class="pl-k">var</span> <span class="pl-smi">client</span> = new <span class="pl-c1">kafkaClient</span>(<span class="pl-s"><span class="pl-pds">'</span>47.105.36.188:2181<span class="pl-pds">'</span></span>);
<span class="pl-k">var</span> <span class="pl-smi">producer</span> = new <span class="pl-c1">Producer</span>(client, {
    requireAcks: <span class="pl-c1">1</span>
});
<span class="pl-k">var</span> <span class="pl-smi">count</span> = <span class="pl-c1">0</span>;
<span class="pl-c"><span class="pl-c">//</span> var client= redis.createClient(6379,"47.105.36.188",{password:"test123"});</span>
<span class="pl-k">var</span> <span class="pl-smi">client</span>= redis.<span class="pl-c1">createClient</span>(<span class="pl-c1">6379</span>,<span class="pl-s"><span class="pl-pds">"</span>10.58.8.81<span class="pl-pds">"</span></span>);
router.<span class="pl-c1">post</span>(<span class="pl-s"><span class="pl-pds">'</span>/seckill<span class="pl-pds">'</span></span>, <span class="pl-c1">function</span> (req, res) {
    count++
    client.<span class="pl-c1">multi</span>().<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>counter<span class="pl-pds">'</span></span>).<span class="pl-c1">decr</span>(<span class="pl-s"><span class="pl-pds">"</span>counter<span class="pl-pds">"</span></span>).<span class="pl-c1">execAsync</span>().<span class="pl-c1">then</span>(<span class="pl-c1">function</span>(reply) {
        <span class="pl-k">if</span> (reply[<span class="pl-c1">1</span>] &gt;= <span class="pl-c1">0</span>) {
            <span class="pl-k">var</span> <span class="pl-smi">payload</span> = [
                {
                    topic: <span class="pl-s"><span class="pl-pds">'</span>CAR_NUMBER<span class="pl-pds">'</span></span>,
                    messages: <span class="pl-s"><span class="pl-pds">'</span>购买成功，还剩下<span class="pl-pds">'</span></span>+<span class="pl-c1">parseInt</span>(reply[<span class="pl-c1">1</span>])+<span class="pl-s"><span class="pl-pds">'</span>个<span class="pl-pds">'</span></span>,
                    partition: <span class="pl-c1">0</span>
                }
            ];
            producer.<span class="pl-c1">send</span>(payload, <span class="pl-c1">function</span> (err, data) {
                <span class="pl-c"><span class="pl-c">//</span> console.log(data);</span>
            });
            console.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>购买成功，还剩下<span class="pl-pds">'</span></span>+<span class="pl-c1">parseInt</span>(reply[<span class="pl-c1">1</span>])+<span class="pl-s"><span class="pl-pds">'</span>个<span class="pl-pds">'</span></span>)
            res.<span class="pl-c1">json</span>({messages:<span class="pl-s"><span class="pl-pds">'</span>购买成功，还剩下<span class="pl-pds">'</span></span>+<span class="pl-c1">parseInt</span>(reply[<span class="pl-c1">1</span>])+<span class="pl-s"><span class="pl-pds">'</span>个<span class="pl-pds">'</span></span>})
        } <span class="pl-k">else</span> {
            client.<span class="pl-c1">set</span>(<span class="pl-s"><span class="pl-pds">"</span>counter<span class="pl-pds">"</span></span>,<span class="pl-s"><span class="pl-pds">"</span>0<span class="pl-pds">"</span></span>)
            console.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">'</span>抢完了<span class="pl-pds">'</span></span>+<span class="pl-c1">parseInt</span>(reply[<span class="pl-c1">1</span>])+<span class="pl-s"><span class="pl-pds">'</span>个<span class="pl-pds">'</span></span>)
            res.<span class="pl-c1">json</span>({messages:<span class="pl-s"><span class="pl-pds">'</span>抢完了<span class="pl-pds">'</span></span>})

        }
    })
});
client.<span class="pl-c1">on</span>(<span class="pl-s"><span class="pl-pds">'</span>error<span class="pl-pds">'</span></span>, <span class="pl-c1">function</span> (er) {
    console.<span class="pl-c1">trace</span>(<span class="pl-s"><span class="pl-pds">'</span>Here I am<span class="pl-pds">'</span></span>);
    console.<span class="pl-k">error</span>(er.<span class="pl-smi">stack</span>);
    client.<span class="pl-c1">end</span>(<span class="pl-c1">true</span>);
});
router.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/getCount<span class="pl-pds">'</span></span>, <span class="pl-c1">function</span> (req, res) {
    client.<span class="pl-c1">multi</span>().<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>counter<span class="pl-pds">'</span></span>).<span class="pl-c1">execAsync</span>().<span class="pl-c1">then</span>(<span class="pl-c1">function</span>(reply) {
        res.<span class="pl-c1">json</span>({num:<span class="pl-c1">parseInt</span>(reply[<span class="pl-c1">0</span>])})

    })

})
module.<span class="pl-smi">exports</span> = router;</pre></div>
<p>redis自己有断开机制，我就没有手动去处理连接池问题，
由于在并发条件下，redis获取了库存，然后原子减库存，如果分开写，会出现，查有库存，减的时候就没有了。所有有直接一起写，另外也要查询后做出判断</p>
<p>Kafka 生产数据是</p>
<div class="highlight highlight-source-js"><pre> <span class="pl-k">var</span> payload <span class="pl-k">=</span> [
                {
                    topic<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>CAR_NUMBER<span class="pl-pds">'</span></span>,
                    messages<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>购买成功，还剩下<span class="pl-pds">'</span></span><span class="pl-k">+</span><span class="pl-c1">parseInt</span>(reply[<span class="pl-c1">1</span>])<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">'</span>个<span class="pl-pds">'</span></span>,
                    partition<span class="pl-k">:</span> <span class="pl-c1">0</span>
                }
            ];
<span class="pl-smi">producer</span>.<span class="pl-c1">send</span>(payload, <span class="pl-k">function</span> (<span class="pl-smi">err</span>, <span class="pl-smi">data</span>) {
                <span class="pl-c"><span class="pl-c">//</span> console.log(data);</span>
            });</pre></div>
<p>接下来是测试了
1.redis设置库存1000
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/b3db64e005461cb72c7c568ef9626aa453e7bb7a/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343133353833333135332e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730"><img src="https://camo.githubusercontent.com/b3db64e005461cb72c7c568ef9626aa453e7bb7a/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343133353833333135332e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730" alt="我" data-canonical-src="https://img-blog.csdnimg.cn/20190524135833153.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0,size_16,color_FFFFFF,t_70" style="max-width:100%;"></a>
2.Jmeter设置2000并发
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/2a57afea75a2edf3a869ff1e8a04b9df794ba2da/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343133353932343238302e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730"><img src="https://camo.githubusercontent.com/2a57afea75a2edf3a869ff1e8a04b9df794ba2da/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343133353932343238302e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730" alt="在这里插入图片描述" data-canonical-src="https://img-blog.csdnimg.cn/20190524135924280.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0,size_16,color_FFFFFF,t_70" style="max-width:100%;"></a>
启动Jmeter
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/1bbd753bf6a71bdacce37c7ba53030c2745778ee/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343134303034323231352e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730"><img src="https://camo.githubusercontent.com/1bbd753bf6a71bdacce37c7ba53030c2745778ee/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303139303532343134303034323231352e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730" alt="在这里插入图片描述" data-canonical-src="https://img-blog.csdnimg.cn/20190524140042215.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0,size_16,color_FFFFFF,t_70" style="max-width:100%;"></a>
<a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/15b8b37d911651eecf54a7be13cd0bb6b21b46d0/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f323031393035323431343231313934362e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730"><img src="https://camo.githubusercontent.com/15b8b37d911651eecf54a7be13cd0bb6b21b46d0/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f323031393035323431343231313934362e706e673f782d6f73732d70726f636573733d696d6167652f77617465726d61726b2c747970655f5a6d46755a33706f5a57356e6147567064476b2c736861646f775f31302c746578745f6148523063484d364c7939696247396e4c6d4e7a5a473475626d56304c33457a4e5467314f5445302c73697a655f31362c636f6c6f725f4646464646462c745f3730" alt="在这里插入图片描述" data-canonical-src="https://img-blog.csdnimg.cn/2019052414211946.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3EzNTg1OTE0,size_16,color_FFFFFF,t_70" style="max-width:100%;"></a>
最后redis中的counter变成0，seckill数据表中会插入1000条记录</p>
<p>感谢<a href="https://www.jianshu.com/p/c18e61d0726c" rel="nofollow">原文</a> 提供的经验。</p>
<p>项目源码地址：<a href="https://github.com/harryluo163/miaosha">miaosha</a></p>
</article>
  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 <span title="0.44522s from unicorn-68cb54d68f-7tfs6">GitHub</span>, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-a4MJd8RUUtn4VFagYK66G3Fs3zWIYS9Saf1msU+xkTVy3MFt/oveIKI8sQgLrbTQSHDmhVKXkYShmru2+MT+zA==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-9fc796f4.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-bxA7q0S8wrHqA9KoiAYstD4egXnrBXQOwpiPJFYYY1PrcqzTeDW5FOTJ7ywDFEaRCTVaiMs9GjDESRgEc5YDGQ==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-a6fa9234.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

