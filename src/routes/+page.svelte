<script>
  // Your script here if needed
</script>

<style>
  .matte-black {
    @apply min-h-screen flex items-center justify-center;
  }

  .pulsing-border {
    @apply border-2 border-white border-opacity-50 p-8 flex flex-col items-center space-y-4;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      border-color: rgba(255, 255, 255, 0.5);
    }
    50% {
      border-color: rgba(255, 255, 255, 1);
    }
  }

  .icon-box {
    @apply bg-white bg-opacity-10 p-4 rounded-lg flex items-center space-x-2;
  }

  .icon-box a {
    @apply text-white text-lg no-underline flex items-center space-x-2;
  }

  .icon-box a:hover {
    @apply text-opacity-75;
  }
</style>

<div class="matte-black">
  <div class="pulsing-border">
    <h1 class="text-4xl font-bold">ThatOneDevil</h1>
    <p>Welcome to my portfolio</p>
    <p class="italic text-1xl">Im still learning</p>
    <div class="icon-box">
      <a href="https://github.com/thatonedevil" target="_blank">
        <i class="fab fa-github"></i>
        <span>GitHub</span>
      </a>
    </div>
    <div class="icon-box">
      <i class="fab fa-discord"></i>
      <span>ThatOneDevil</span>
    </div>
  </div>
</div>
