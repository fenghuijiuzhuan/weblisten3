<div class="wping-addcolumn-poper"  style="display: none;padding: 50px 50px 60px;">
  <form class="layui-form" action="" lay-filter="addColumn">
    <input name="columnTypeId" style="width: 0;height: 0;opacity: 0;margin: 0;padding: 0;position:absolute;top: -10000px;border: none;">
    <input name="prevColumnId" style="width: 0;height: 0;opacity: 0;margin: 0;padding: 0;position:absolute;top: -10000px;border: none;">
    <div class="layui-form-item">
      <label class="layui-form-label">请选择分类</label>
      <div class="layui-input-block">
        <input type="text" id="treeselect" lay-filter="treeselect" lay-verify="required"  class="layui-input" value="123455">
      </div>
    </div>
    <div id="addcolumnhidebox" style="display: none;">
      <div class="layui-form-item">
        <label class="layui-form-label">栏目名称:</label>
        <div class="layui-input-block">
          <input type="text" name="title" required  lay-verify="required" placeholder="栏目名称不能为空" autocomplete="off" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">栏目地址:</label>
        <div class="layui-input-block">
          <input type="text" name="url" required  lay-verify="required" placeholder="栏目地址不能为空" autocomplete="off" class="layui-input">
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">是否是首页</label>
        <div class="layui-input-block">
          <input type="checkbox" name="switch" lay-skin="switch" lay-text="是|否">
        </div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <a class="layui-btn layui-btn-primary wping-form-cancel">返回</a>
          <button class="layui-btn" lay-submit lay-filter="formDemo">保存</button>
          <button class="layui-btn" lay-submit lay-filter="formChange" style="display: none">保存</button>
          <!-- <a class="layui-btn layui-btn-normal wping-from-test">测试</a> -->
        </div>
      </div>
    </div>
  </form>
</div>