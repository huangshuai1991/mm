<script>
export default {
  name: "InsRender",
  functional: true,
  props: {
    scope: Object,
    render: Function,
  },
  render: (createElement, context) => {
    return context.props.render
      ? context.props.render(createElement, context.props.scope)
      : "";
  },
};
</script>