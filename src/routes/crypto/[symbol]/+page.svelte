<script>
  export let data;

  const allTokenData = data.data.data

  const tokenData = allTokenData.find(e=> e.symbol === data.symbol)

</script>

<div class="flex items-center justify-center h-full">
  <div class="no-underline hover:underline">
    <a href={`/crypto/${data.symbol}`} class="no-underline hover:underline">
      <div class="card-hover">
        <div class="card px-2 py-4 flex flex-col items-center">
          <div class="header flex items-center justify-center my-4">
            {#if data.symbol === "BTC"}
              <img src="/images/btc.png" alt="btc-photo" class="w-20 h-50">
            {:else if data.symbol === "ETH"}
              <img src="/images/eth.png" alt="eth-photo" class="w-20 h-50">
            {:else if data.symbol === "USDT"}
              <img src="/images/usdt.png" alt="usdt-photo" class="w-20 h-50">
            {:else if data.symbol === "BNB"}
              <img src="/images/bnb.png" alt="bnb-photo" class="w-20 h-50">
            {:else if data.symbol ==="USDC"}
              <img src="/images/usdc.png" alt="usdc-photo" class="w-20 h-50">
            {:else if data.symbol === "XRP"}
              <img src="/images/xrp.png" alt="xrp-photo" class="w-20 h-50">
            {:else if data.symbol === "BUSD"}
              <img src="/images/busd.png" alt="busd-photo" class="w-20 h-50">
            {:else if data.symbol === "ADA"}
              <img src="/images/ada.png" alt="ada-photo" class="w-20 h-50">
            {:else if data.symbol ==="DOGE"}
              <img src="/images/doge.png" alt="usdc-photo" class="w-20 h-50">
            {:else if data.symbol === "SOL"}
              <img src="/images/sol.png" alt="xrp-photo" class="w-20 h-50">
            {:else if data.symbol ==="STETH"}
              <img src="/images/steth.png" alt="steth-photo" class="w-20 h-50">
            {:else if data.symbol === "DOT"}
              <img src="/images/dot.png" alt="dot-photo" class="w-20 h-50">
            {:else}
              <img src="/images/error.jpg" alt="error-photo" class="w-20 h-50">
            {/if}
          </div>
          <h3>{tokenData.symbol}</h3>
          <h3>{tokenData.name}</h3>
          <h3>Rank: {tokenData.rank}</h3>
          <h3>Price: {tokenData.price_usd}</h3>
        </div>
      </div>
    </a>
  </div>
</div>
