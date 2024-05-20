<?php
    // Obtener ruta para llegar a "/"
    function path_to_root() {
        $level = substr_count($_SERVER['PHP_SELF'], "/") - 1;

        $path = "";
        for( $l = 0; $l < $level; $l++ )
            $path .= "../";

        return $path;
    }

    $root = path_to_root();
?>
<div id="$logout">
    <img src=<?php echo "\"".$root."assets/img/start-end.svg\""; ?>>
</div>

<script>
    $logout.onclick = () => { window.location.href = <?php echo "\"".$root."assets/scripts_php/logout/destroy-session.php\""; ?> }
</script>

<style>
    #\$logout {
        position: fixed;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #00085e;
        right: 10px;
        bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    #\$logout img {
        height: 70%;
        position: relative;
        right: 3px;
    }
</style>