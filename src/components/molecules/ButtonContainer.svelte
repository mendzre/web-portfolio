<script lang="ts">
  import Button from "@atoms/Button.svelte";

  function handleClick() {
    alert("Button has been clicked!");
  }
</script>

<div class="flex gap-4">
  <Button props={{ variant: "fill", handleClick }}>Contact me</Button>
  <Button props={{ variant: "outline", handleClick }}>View my work</Button>
</div>
