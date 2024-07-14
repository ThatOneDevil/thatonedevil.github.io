<script>
  // Your script here if needed
</script>

<style>
  .background {
    @apply min-h-screen flex items-center justify-center;
  }

  .pulsing-border {
    @apply border-2 border-white border-opacity-50 p-8 flex flex-col items-center space-y-4;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      border-color: #f07079;
    }
    50% {
      border-color: #e9878e;
    }
  }

  .icon-box {
    @apply bg-white bg-opacity-10 p-4 rounded-lg flex items-center space-x-2;
  }

  .icon-box a {
    @apply text-white text-lg no-underline flex items-center space-x-2;
  }

  .icon-box a:hover {
    @apply text-opacity-55;
  }
</style>

<div class="background">
  <div class="pulsing-border">
    <h1 class="bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-4xl">ThatOneDevil</h1>
    <p>Welcome to my portfolio</p>
    <p class="italic text-1xl">Im still learning</p>
    <div class="icon-box">
      <a href="https://github.com/thatonedevil" target="_blank">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
      </a>
    </div>
    <div class="icon-box">
      <a href="https://discord.com/users/422434919311212544" target="_blank">
        <i class="fab fa-discord"></i>
        <span>ThatOneDevil</span>
      </a>
    </div>
    <div class="icon-box">
      <a href="https://github.com/ThatOneDevil/thatonedevil.github.io" target="_blank">
        <i class="fab fa-github"></i>
        <span>Source Code</span>
      </a>
    </div>
  </div>
</div>
