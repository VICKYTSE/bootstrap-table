/**
 * Bootstrap Table Brazilian Portuguese Translation
 * Author: Eduardo Cerqueira<egcerqueira@gmail.com>
 * Update: João Mello<jmello@hotmail.com.br>
 */

$.fn.bootstrapTable.locales['pt-BR'] = {
  formatLoadingMessage () {
    return 'Carregando, aguarde'
  },
  formatRecordsPerPage (pageNumber) {
    return `${pageNumber} registros por página`
  },
  formatShowingRows (pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return `Exibindo ${pageFrom} até ${pageTo} de ${totalRows} linhas (filtered from ${totalNotFiltered} total rows)`
    }

    return `Exibindo ${pageFrom} até ${pageTo} de ${totalRows} linhas`
  },
  formatDetailPagination (totalRows) {
    return `Showing ${totalRows} rows`
  },
  formatClearSearch () {
    return 'Clear Search'
  },
  formatSearch () {
    return 'Pesquisar'
  },
  formatNoMatches () {
    return 'Nenhum registro encontrado'
  },
  formatPaginationSwitch () {
    return 'Ocultar/Exibir paginação'
  },
  formatRefresh () {
    return 'Recarregar'
  },
  formatToggle () {
    return 'Alternar'
  },
  formatColumns () {
    return 'Colunas'
  },
  formatFullscreen () {
    return 'Fullscreen'
  },
  formatAllRows () {
    return 'All'
  },
  formatAutoRefresh () {
    return 'Auto Refresh'
  },
  formatExport () {
    return 'Export data'
  },
  formatJumpTo () {
    return 'GO'
  },
  formatAdvancedSearch () {
    return 'Advanced search'
  },
  formatAdvancedCloseButton () {
    return 'Close'
  }
}

$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['pt-BR'])
