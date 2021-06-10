export default{
    namespaced: true,
    state(){
        return{
            icons:{
                actionGames: 'mdi-clock-fast',
                arrowLeft: 'mdi-arrow-left',
                casino: 'mdi-slot-machine',
                chessGame:'mdi-chess-queen',
                chevronDown: 'mdi-chevron-down',
                chevronRight: 'mdi-chevron-right',
                close: 'mdi-close',
                flag: 'mdi-flag',
                gift: 'mdi-gift-outline',
                grid: 'mdi-dots-grid',
                liveCasino: 'mdi-poker-chip',
                lotto: 'mdi-numeric-8-circle-outline',
                mobile: 'mdi-cellphone-text',
                soccer: 'mdi-soccer',
                user: 'mdi-account-circle-outline',
                virtual: 'mdi-monitor-screenshot',
                youtube: 'mdi-youtube',
            }
        }
    },
    getters:{
        icons(state){
            return state.icons
        }
    },
}