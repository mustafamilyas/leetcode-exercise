function numMusicPlaylists(n: number, goal: number, k: number): number {
    const MODULO = 1e9 + 7;
    const dp = Array.from( { length: 2 }, () => Array( n + 1 ).fill( 0 ) );
    dp[ 1 ][ 1 ] = n;
    for ( let i = 2; i < goal; i++ ) {
        for ( let j = 1; j <= i && j <= n; j++ ) {
            dp[ 0 ][ j ] = dp[ 1 ][ j ];
            dp[ 1 ][ j ] = ( dp[ 0 ][ j - 1 ] * ( n - j + 1 ) ) % MODULO;
            if ( j > k ) dp[ 1 ][ j ] = ( dp[ 1 ][ j ] + dp[ 0 ][ j ] * ( j - k ) ) % MODULO;
        }
    }
    return ( dp[ 1 ][ n - 1 ] + dp[ 1 ][ n ] * ( n - k ) ) % MODULO;
};