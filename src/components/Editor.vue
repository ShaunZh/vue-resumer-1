<template>
  <div id="editor">
    <nav>
        <ol>
            <li class = "active">
              <svg class="icon ">
                  <use xlink:href="#icon-ionc--"></use>
              </svg>
            </li><!--
         --><li>
              <svg class="icon">
                  <use xlink:href="#icon-phone"></use>
              </svg>
            </li><!--
          --><li>
              <svg class="icon">
                  <use xlink:href="#icon-work"></use>
              </svg>
            </li><!--
            --><li>
              <svg class="icon">
                  <use xlink:href="#icon-project"></use>
              </svg>
            </li><!--
            --><li>
              <svg class="icon">
                  <use xlink:href="#icon-book"></use>
              </svg>
            </li><!--
            --><li>
              <svg class="icon">
                  <use xlink:href="#icon-iocn_hobby"></use>
              </svg>
            </li>
        </ol>
    </nav>
  </div>
</template>


<style lang="scss">
  #editor{
    min-height: 100px;
    display: flex;
    > nav {
      background-color: #000;
      width: 80px;
      > ol > li {
        padding: 8px 0;
        text-align: center;
        > .icon {
          width: 24px;
          height: 24px;
          fill: #fff;
        }

        &.active {
          background-color: #fff;
          > .icon {
            fill: #000;
          }
        }

      }
    }
  }

</style>
